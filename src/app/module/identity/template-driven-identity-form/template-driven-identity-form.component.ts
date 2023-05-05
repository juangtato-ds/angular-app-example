import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserIdentity, UserRole } from 'src/app/core/user-identity.model';

@Component({
  selector: 'app-template-driven-identity-form',
  templateUrl: './template-driven-identity-form.component.html',
  styleUrls: ['./template-driven-identity-form.component.scss']
})
export class TemplateDrivenIdentityFormComponent {

  @Input()
  data!: UserIdentity;
  @Output()
  updateIdentity = new EventEmitter<UserIdentity | undefined>();

  roles: Array<string>;

  constructor() {
    this.roles = Object.values(UserRole);
  }

  save(): void {
    this.updateIdentity.emit(this.data);
  }

  cancel(): void {
    this.updateIdentity.emit(undefined);
  }

}
