import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserIdentity, UserRole, userRoleMap } from 'src/app/core/user-identity.model';


@Component({
  selector: 'app-plain-identity-form',
  templateUrl: './plain-identity-form.component.html',
  styleUrls: ['./plain-identity-form.component.scss']
})
export class PlainIdentityFormComponent {
  form = new FormGroup({
    id: new FormControl('', { nonNullable: true }),
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    role: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    attributes: new FormArray(new Array<FormControl<string>>()),
    info: new FormGroup({
      surname: new FormControl<string>(''),
      alias: new FormControl<string>(''),
      age: new FormControl(0, {
        nonNullable: true, validators: [
          Validators.required,
          Validators.min(0),
          Validators.max(200)
        ]
      })
    })
  });

  @Input()
  set data(value: UserIdentity) {
    // this.form.setValue(value);
    // this.form.patchValue(value);
    this.form.setValue({
      id: value.id,
      name: value.name,
      role: value.role,
      attributes: [],
      info: {
        surname: value.info.surname || null,
        alias: value.info.alias || null,
        age: value.info.age
      }
    });
  }

  @Output()
  updateIdentity = new EventEmitter<UserIdentity | undefined>();

  roles: Array<string>;

  constructor() {
    this.roles = Object.values(UserRole);
  }

  save(): void {
    if (this.form.valid) {
      const value = this.form.getRawValue();

      this.updateIdentity.emit({
        id: value.id,
        name: value.name,
        role: value.role in userRoleMap ? userRoleMap[value.role] : UserRole.ANONYMOUS,
        attributes: [...value.attributes],
        info: {
          surname: value.info.surname || undefined,
          alias: value.info.alias || undefined,
          age: value.info.age
        }
      });
    } else {
      alert('Datos inválidos');
    }
  }

  cancel(): void {
    this.updateIdentity.emit(undefined);
  }
}
