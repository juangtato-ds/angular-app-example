import { Component, OnInit } from '@angular/core';
import { UserIdentity } from '../../../../../core/user-identity.model';
import { IdentityService } from '../../../../../service/identity.service';
import { ModalService } from '../../../../../ui/layout/service/modal.service';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss']
})
export class UserListPageComponent implements OnInit {

  identityList?: Array<UserIdentity>;

  constructor(
    private identityService: IdentityService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.identityService.list().subscribe({
      next: l => this.identityList = l,
      error: e => {
        console.log('Unable to fetch user list', e);
        this.modalService.modal(
          'Lista vacía'
        );
      }
    });
  }
}
