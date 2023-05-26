import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class InputInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.url.includes('/api/users'))
      return next.handle(request).pipe(
        map(response => {
          if (response.type != 0 && response instanceof HttpResponse<any> && Array.isArray(response.body)) {
            console.log('Aqui va mi respuesta, es instancia de String')

            const nuevaRespuesta = response.clone({
              body: [
                ...response.body,
                { id: 10000, nombre: 'Gordon', apellidos: 'Freeman', email: 'g.freeman@research.black.mesa.gov' }
              ]
            })

            console.log(nuevaRespuesta);
            return nuevaRespuesta;

          } else
            return response;
        })
      );
    else
      return next.handle(request);
  }

}


