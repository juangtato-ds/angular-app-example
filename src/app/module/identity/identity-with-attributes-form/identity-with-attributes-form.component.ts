import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { UserIdentity, userRoleList } from 'src/app/core/user-identity.model';
import { IdentityService } from 'src/app/service/identity.service';

@Component({
  selector: 'app-identity-with-attributes-form',
  templateUrl: './identity-with-attributes-form.component.html',
  styleUrls: ['./identity-with-attributes-form.component.scss']
})
export class IdentityWithAttributesFormComponent {
  form = this.identityService.formWithAttributes();

  get attributes(): FormArray<FormControl<string>> {
    return this.form.controls.attributes;
  }

  @Input()
  set data(value: UserIdentity) {
    this.form.controls.attributes.clear();
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
    value.attributes.forEach(
      v => this.form.controls.attributes.push(this.identityService.attributeForm(v))
    );
  }

  @Output()
  updateIdentity = new EventEmitter<UserIdentity | undefined>();

  roles: Array<string> = userRoleList;

  constructor(
    private identityService: IdentityService
  ) { }

  removeAttribute(index: number): void {
    this.attributes.removeAt(index);
  }

  addAttribute(): void {
    this.attributes.push(this.identityService.attributeForm());
  }

  save(): void {
    if (this.form.valid) {
      this.updateIdentity.emit(this.form.getRawValue());
    } else {
      alert('Datos inválidos');
    }
  }

  cancel(): void {
    this.updateIdentity.emit(undefined);
  }
}
