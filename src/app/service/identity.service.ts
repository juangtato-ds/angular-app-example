import { Injectable } from '@angular/core';
import { UserIdentity, UserRole } from '../core/user-identity.model';
import { Observable, delay, of } from 'rxjs';
import { FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  identity?: UserIdentity;

  constructor(
    private nfb: NonNullableFormBuilder
  ) { }

  get(): Observable<UserIdentity> {
    return of(this.getActualIdentity()).pipe(delay(1500));
  }

  update(identity: UserIdentity): Observable<UserIdentity> {
    if (identity.role === UserRole.ADMIN) {
      identity.id = 'none';
    } else if (identity.role === UserRole.ANONYMOUS) {
      identity.id = this.generateId();
    }
    this.identity = identity;
    return of(this.identity).pipe(delay(1500));
  }

  form() { // dejamos que el transpilador infiera la estructura
    const data = this.getActualIdentity();
    return this.nfb.group({
      id: data.id,
      name: [data.name, [Validators.required]],
      role: [data.role, [Validators.required]],
      // attributes: this.attributeFormArray(data.attributes),
      info: this.nfb.group({
        surname: data.info.surname,
        alias: data.info.alias,
        age: [data.info.age, [Validators.required, Validators.min(1), Validators.max(130)]]
      })
    });
  }

  formWithAttributes() { // dejamos que el transpilador infiera la estructura
    const data = this.getActualIdentity();
    return this.nfb.group({
      id: data.id,
      name: [data.name, [Validators.required]],
      role: [data.role, [Validators.required]],
      attributes: this.attributeFormArray(data.attributes),
      info: this.nfb.group({
        surname: data.info.surname,
        alias: data.info.alias,
        age: [data.info.age, [Validators.required, Validators.min(1), Validators.max(130)]]
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

  private generateId(): string {
    return `ID-${Math.floor(Math.random() * 1000)}`;
  }

  private getActualIdentity(): UserIdentity {
    if (!this.identity) {
      this.identity = {
        id: this.generateId(),
        name: 'Anonymous',
        role: UserRole.ANONYMOUS,
        attributes: ['first', 'time', 'attributes'],
        info: {
          age: -1
        }
      }
    }
    return this.identity;
  }
}
