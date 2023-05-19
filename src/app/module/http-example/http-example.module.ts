import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

import { HttpExampleComponent } from './http-example.component';
import { HttpExampleRoutingModule } from './http-example-routing.module';
import { PageSharedModule } from 'src/app/ui/page-shared/page-shared.module';
import { GenteComponent } from './gente/gente.component';
import { SwapiService } from './services/swapi.service';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosService } from './services/usuarios.service';
import { UsuariosFormComponent } from './usuarios/usuarios-form/usuarios-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuariosDeleteComponent } from './usuarios/usuarios-delete/usuarios-delete.component';
import { ModificarUsuarioComponent } from './usuarios/modificar-usuario/modificar-usuario.component';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { InputInterceptor } from './interceptors/input.interceptor';



@NgModule({
  declarations: [

    HttpExampleComponent,
    GenteComponent,
    UsuariosComponent,
    UsuariosFormComponent,
    UsuariosDeleteComponent,
    ModificarUsuarioComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    ReactiveFormsModule,

    HttpExampleRoutingModule,

    PageSharedModule,

  ],
  providers: [
    HttpClient,

    SwapiService,
    UsuariosService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: LoggingInterceptor,
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: InputInterceptor,
    //   multi: true
    // },
  ]
})
export class HttpExampleModule { }
