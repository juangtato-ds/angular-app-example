import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SECURITY_URL_PREFIX_INTERCEPTOR } from './interceptor/session-interceptor.token';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SessionInterceptor } from './interceptor/session.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SecurityModule {
  static forRoot(routePrefix: Array<string> = []): ModuleWithProviders<SecurityModule> {
    return {
      ngModule: SecurityModule,
      providers: [
        {
          provide: SECURITY_URL_PREFIX_INTERCEPTOR,
          useValue: routePrefix
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: SessionInterceptor,
          multi: true
        }
      ]
    }
  }
}
