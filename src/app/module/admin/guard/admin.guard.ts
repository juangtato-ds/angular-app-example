import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { inject } from '@angular/core';
import { SessionService, UserRole } from 'jgt-core';
import { ModalService, ModalType } from 'jgt-layout';

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
