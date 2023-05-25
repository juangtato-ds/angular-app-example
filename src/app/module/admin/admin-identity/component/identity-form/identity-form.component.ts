import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserIdentity, userRoleList } from '../../../../../core/user-identity.model';
import { IdentityService } from '../../../../../service/identity.service';
import { FormArray, FormControl } from '@angular/forms';
import { ModalService } from '../../../../../ui/layout/service/modal.service';
import { ModalType } from '../../../../../ui/layout/service/modal.api';

@Component({
  selector: 'app-identity-form',
  templateUrl: './identity-form.component.html',
  styleUrls: ['./identity-form.component.scss']
})
export class IdentityFormComponent {
  form = this.identityService.form();

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
    private identityService: IdentityService,
    private modalService: ModalService
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
      this.modalService.modal('Datos inválidos', { type: ModalType.ERROR });
    }
  }

  cancel(): void {
    this.updateIdentity.emit(undefined);
  }
}
