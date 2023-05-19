import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserIdentity } from '../../../core/user-identity.model';
import { SessionService } from '../../../service/session.service';

@Component({
  selector: 'app-side-nav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.scss']
})
export class SideNavMenuComponent implements OnDestroy {
  private sessionSubscription: Subscription;

  session: UserIdentity;

  constructor(
    private sessionService: SessionService
  ) {
    this.session = this.sessionService.getIdentity();
    this.sessionSubscription = this.sessionService.sessionChange().subscribe(
      s => this.session = s
    );
  }

  ngOnDestroy(): void {
    this.sessionSubscription.unsubscribe();
  }

}
