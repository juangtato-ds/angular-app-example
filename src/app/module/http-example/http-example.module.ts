import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { HttpExampleComponent } from './http-example.component';
import { HttpExampleRoutingModule } from './http-example-routing.module';
import { PageSharedModule } from 'src/app/ui/page-shared/page-shared.module';
import { GenteComponent } from './gente/gente.component';
import { SwapiService } from './services/swapi.service';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosService } from './services/usuarios.service';



@NgModule({
  declarations: [

    HttpExampleComponent,
    GenteComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    
    HttpExampleRoutingModule,

    PageSharedModule,

  ],
  providers: [
    HttpClient,
    SwapiService,
    UsuariosService
  ]
})
export class HttpExampleModule { }
