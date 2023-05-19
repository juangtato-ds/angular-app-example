import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserIdentity } from '../../../../../core/user-identity.model';
import { IdentityService } from '../../../../../service/identity.service';
import { ModalService } from '../../../../../ui/layout/service/modal.service';
import { ModalType } from '../../../../../ui/layout/service/modal.api';

@Component({
  selector: 'app-user-creation-page',
  templateUrl: './user-creation-page.component.html',
  styleUrls: ['./user-creation-page.component.scss']
})
export class UserCreationPageComponent {
  private static ROOT_URL = '/admin/identity/list';

  constructor(
    private router: Router,
    private identityService: IdentityService,
    private modalService: ModalService
  ) { }

  editionDone(data: UserIdentity | undefined): void {
    if (data) {
      this.identityService.create(data).subscribe({
        next: v => {
          this.modalService.modal(
            'Updated!', { type: ModalType.SUCCESS }
          ).promise.then(
            () => this.navigateToList()
          );
        },
        error: e => {
          this.modalService.modal(
            'Unable to update', { type: ModalType.ERROR }
          )
          console.log('Unable to update', e);
        }
      });
    } else {
      this.navigateToList();
    }
  }

  private navigateToList(): void {
    this.router.navigateByUrl(UserCreationPageComponent.ROOT_URL);
  }
}
