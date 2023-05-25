import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SECURITY_URL_PREFIX_INTERCEPTOR } from './session-interceptor.token';
import { SessionService, UserRole } from 'jgt-core';

@Injectable()
export class SessionInterceptor implements HttpInterceptor {

  // TODO this could be configurable
  private validRoles = new Set<string>([UserRole.ADMIN, UserRole.USER]);

  constructor(
    private sessionService: SessionService,
    @Inject(SECURITY_URL_PREFIX_INTERCEPTOR)
    private prefixList: Array<string> = []
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    for (const prefix of this.prefixList) {
      if (request.url.indexOf(prefix) == 0) {
        const identity = this.sessionService.getIdentity();
        const token = this.sessionService.getIdentityToken();
        if (this.validRoles.has(identity.role) && token){
          request = request.clone({
            headers: request.headers.set('API-Authorization', token)
          });
        } else {
          throw new Error(`No valid access to ${request.url} with role ${identity.role} (or no token)`);
        }
        break;
      }
    }
    return next.handle(request);
  }
}
