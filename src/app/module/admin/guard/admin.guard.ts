import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { SessionService } from '../../../service/session.service';
import { UserRole } from '../../../core/user-identity.model';
import { inject } from '@angular/core';
import { ModalService } from '../../../ui/layout/service/modal.service';
import { ModalType } from '../../../ui/layout/service/modal.api';

// https://angular.io/guide/router-tutorial-toh#canactivate-requiring-authentication
// https://angular.io/api/router/CanActivateFn
export const adminGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  if (inject(SessionService).getIdentity().role == UserRole.ADMIN) {
    return true;
  }

  return inject(ModalService).modal(
    'You are not authorized to see this',
    { type: ModalType.WARNING }
  ).promise.then(() =>
    (inject(Router)).parseUrl('/identity')
  );
};
