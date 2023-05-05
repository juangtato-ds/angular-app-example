import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserIdentity } from 'src/app/core/user-identity.model';
import { IdentityService } from 'src/app/service/identity.service';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss']
})
export class IdentityComponent implements OnInit {

  identity?: UserIdentity;

  constructor(
    private identityService: IdentityService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.identityService.get().subscribe(
      i => this.identity = i
    );
  }

  updateIdentity(userIdentity: UserIdentity | undefined): void {
    if (userIdentity) {
      this.identity = undefined;
      this.identityService.update(userIdentity).subscribe(v => this.router.navigateByUrl('/'));
    } else {
      this.router.navigateByUrl('/');
    }
  }

}
