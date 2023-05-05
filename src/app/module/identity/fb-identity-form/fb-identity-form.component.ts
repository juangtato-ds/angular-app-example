import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, Validators } from '@angular/forms';
import { UserIdentity, UserRole, userRoleMap } from 'src/app/core/user-identity.model';

@Component({
  selector: 'app-fb-identity-form',
  templateUrl: './fb-identity-form.component.html',
  styleUrls: ['./fb-identity-form.component.scss']
})
export class FbIdentityFormComponent {

  form = this.nfb.group({
    id: '',
    name: ['', [Validators.required]],
    role: ['',[Validators.required]],
    attributes: this.nfb.array(new Array<string>()),
    info: this.nfb.group({
      surname: '',
      alias: '',
      age: [0, [Validators.required, Validators.min(-5), Validators.max(100)]]
    })
  });

  // Ejemplo de fb nullable, no se usa en el ejemplo
  nullableForm =  this.fb.group({
    id: '',
    name: ['', [Validators.required]],
    role: ['',[Validators.required]],
    attributes: this.fb.array(new Array<string>()),
    info: this.fb.group({
      surname: '',
      alias: '',
      age: [0, [Validators.required, Validators.min(-5), Validators.max(100)]]
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
        surname: value.info.surname || '',
        alias: value.info.alias || '',
        age: value.info.age
      }
    });
  }

  @Output()
  updateIdentity = new EventEmitter<UserIdentity | undefined>();

  roles: Array<string>;

  constructor(
    private fb: FormBuilder,
    private nfb: NonNullableFormBuilder
  ) {
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
