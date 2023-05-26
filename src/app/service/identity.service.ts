import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import {
  AbstractControl,
  FormControl,
  NonNullableFormBuilder,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserRole, UserIdentity, NewUserIdentity } from 'jgt-core';


function roleValidator(control: AbstractControl): ValidationErrors | null {
  return control.value == UserRole.ANONYMOUS ? { role: true } : null;

}

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  private static API_URL = '/api/users/';

  userMap: Map<number, UserIdentity>;

  constructor(
    private http: HttpClient,
    private nfb: NonNullableFormBuilder
  ) {
    this.userMap = new Map<number, UserIdentity>();
  }

  list(): Observable<Array<UserIdentity>> {
    return this.http.get<UserIdentity[]>(IdentityService.API_URL).pipe(
      tap(v => this.populateCache(v))
    );
  }

  get(id: number): Observable<UserIdentity> {
    return this.http.get<UserIdentity>(this.urlById(id));
  }

  create(identity: UserIdentity): Observable<UserIdentity> {
    return this.http.post<UserIdentity>(IdentityService.API_URL, this.newUserIdentityMapper(identity)).pipe(
      tap(v => this.userMap.set(v.id, v))
    );
  }

  update(identity: UserIdentity): Observable<UserIdentity> {
    return this.http.patch<UserIdentity>(this.urlById(identity.id), identity).pipe(
      tap(v => this.userMap.set(v.id, v))
    );
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.urlById(id)).pipe(
      tap(() => this.userMap.delete(id))
    );
  }

  form() { // dejamos que el transpilador infiera la estructura
    return this.nfb.group({
      id: -1,
      name: ['', [Validators.required]],
      role: [UserRole.ANONYMOUS, [Validators.required, roleValidator]],
      attributes: this.attributeFormArray([]),
      info: this.nfb.group({
        surname: '',
        alias: '',
        age: [-1, [Validators.required, Validators.min(1), Validators.max(130)]]
      })
    });
  }

  attributeForm(value: string = ''): FormControl<string> {
    return this.nfb.control(value);
  }

  private attributeFormArray(attributes: Array<string>) {
    const controls = attributes.map(v => this.attributeForm(v));
    return this.nfb.array(controls);
  }

  private urlById(id: number): string {
    return IdentityService.API_URL + id;
  }

  private populateCache(userList: Array<UserIdentity>): void {
    this.userMap.clear();
    for (const user of userList) {
      this.userMap.set(user.id, user);
    }
  }

  private newUserIdentityMapper(identity: UserIdentity): NewUserIdentity {
    return {
      name: identity.name,
      role: identity.role,
      attributes: identity.attributes,
      info: identity.info
    }
  }
}
