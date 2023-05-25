import { Component, OnInit } from '@angular/core';
import { IdentityService } from '../../../../../service/identity.service';
import { UserIdentity } from 'jgt-core';
import { ModalService } from 'jgt-layout';

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
