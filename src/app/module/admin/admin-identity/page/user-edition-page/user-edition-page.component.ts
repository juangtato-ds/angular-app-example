import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserIdentity } from '../../../../../core/user-identity.model';
import { IdentityService } from '../../../../../service/identity.service';
import { ModalService } from '../../../../../ui/layout/service/modal.service';
import { ModalType } from '../../../../../ui/layout/service/modal.api';


@Component({
  selector: 'app-user-edition-page',
  templateUrl: './user-edition-page.component.html',
  styleUrls: ['./user-edition-page.component.scss']
})
export class UserEditionPageComponent implements OnInit {

  private static ROOT_URL = '/admin/identity/list';

  static readonly PARAM_ID = 'user-id';

  userId!: number;
  identity?: UserIdentity;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private identityService: IdentityService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    // Actual pattern does not allow changing the ID at runtime
    const userId = parseInt(this.activatedRoute.snapshot.paramMap.get(UserEditionPageComponent.PARAM_ID) + '', 10);
    if (isNaN(userId)) {
      this.navigateToList();
    }

    this.userId = userId;

    this.identityService.get(this.userId).subscribe({
      next: v => this.identity = v,
      error: e => {
        console.log(`Unable to fetch ${this.userId}`, e);
        this.modalService.modal(
          'Unable to fetch data',
          { type: ModalType.ERROR }
        ).promise.then(() =>
          this.navigateToList()
        );
      }
    });
  }

  editionDone(data: UserIdentity | undefined): void {
    if (data) {
      this.identityService.update(data).subscribe({
        next: v => {
          this.modalService.modal(
            'Updated!!',
            { type: ModalType.SUCCESS }
          ).promise.then(() =>
            this.navigateToList()
          );
        },
        error: e => {
          console.log('Unable to update', e);
          this.modalService.modal(
            'Error ' + e,
            { type: ModalType.ERROR }
          );
        }
      });
    } else {
      this.navigateToList();
    }
  }

  private navigateToList(): void {
    this.router.navigateByUrl(UserEditionPageComponent.ROOT_URL);
  }

}
