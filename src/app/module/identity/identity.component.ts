import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserIdentity } from '../../core/user-identity.model';
import { IdentityService } from '../../service/identity.service';
import { SessionService } from '../../service/session.service';
import { ModalService } from '../../ui/layout/service/modal.service';
import { ModalType } from '../../ui/layout/service/modal.api';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss']
})
export class IdentityComponent implements OnInit {

  selectedId!: number;
  identity!: UserIdentity;
  userList: Array<UserIdentity> = [];

  constructor(
    private sessionService: SessionService,
    private identityService: IdentityService,
    private router: Router,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.identity = this.sessionService.getIdentity();
    this.selectedId = this.identity.id;
    this.identityService.list().subscribe({
      next: v => this.userList = v,
      error: e => {
        console.log('Comm error', e);
        this.modalService.modal('Unable to fetch user list', { type: ModalType.ERROR });
      }
    });
  }

  updateIdentity(): void {
    this.sessionService.setIdentity(this.userList.find(v => v.id == this.selectedId));
    this.modalService.modal(
      'Identidad de sesión actualizada', { type: ModalType.SUCCESS }
    ).promise.then(
      () => this.router.navigateByUrl('/')
    );
  }

}
