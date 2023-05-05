import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserIdentity, userRoleList } from 'src/app/core/user-identity.model';
import { IdentityService } from 'src/app/service/identity.service';

@Component({
  selector: 'app-identity-form',
  templateUrl: './identity-form.component.html',
  styleUrls: ['./identity-form.component.scss']
})
export class IdentityFormComponent {
  form = this.identityService.form();

  @Input()
  set data(value: UserIdentity) {
    // this.form.setValue(value);
    // this.form.patchValue(value);
    this.form.setValue({
      id: value.id,
      name: value.name,
      role: value.role,
      // attributes: [], // no vamos a gestionar atributos para este ejemplo
      info: {
        surname: value.info.surname || '',
        alias: value.info.alias || '',
        age: value.info.age
      }
    });
  }

  @Output()
  updateIdentity = new EventEmitter<UserIdentity | undefined>();

  roles: Array<string> = userRoleList;

  constructor(
    private identityService: IdentityService
  ) { }

  save(): void {
    if (this.form.valid) {
      this.updateIdentity.emit({
        ...this.form.getRawValue(),
        attributes: []
      });
    } else {
      alert('Datos inválidos');
    }
  }

  cancel(): void {
    this.updateIdentity.emit(undefined);
  }
}
