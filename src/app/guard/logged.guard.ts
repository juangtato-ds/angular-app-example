import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { SessionService } from '../service/session.service';
import { inject } from '@angular/core';
import { UserRole } from '../core/user-identity.model';
import { ModalService } from '../ui/layout/service/modal.service';
import { ModalType } from '../ui/layout/service/modal.api';

// https://angular.io/guide/router-tutorial-toh#canactivate-requiring-authentication
// https://angular.io/api/router/CanActivateFn
export const loggedGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | Promise<UrlTree> => {
  const sessionService: SessionService = inject(SessionService);

  let result: boolean | Promise<UrlTree> = sessionService.getIdentity().role !== UserRole.ANONYMOUS;
  if (!result) {
    const router: Router = inject(Router);
    result = inject(ModalService).modal(
      'Debes tener una sesión para acceder a esta página',
      {
        title: 'No sesión',
        type: ModalType.WARNING
      }
    ).promise.then(() => router.parseUrl('/identity'));
  }
  return result;
};
