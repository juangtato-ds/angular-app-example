import { Component, OnDestroy } from '@angular/core';
import { SessionService, UserIdentity } from 'jgt-core';
import { Subscription } from 'rxjs';

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
