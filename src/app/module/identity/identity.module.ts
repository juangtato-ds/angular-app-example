import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentityRoutingModule } from './identity-routing.module';
import { IdentityComponent } from './identity.component';
import { FormsModule } from '@angular/forms';
import { PageSharedModule } from 'jgt-layout';


@NgModule({
  declarations: [
    IdentityComponent,
  ],
  imports: [
    CommonModule,
    IdentityRoutingModule,

    FormsModule,

    PageSharedModule
  ]
})
export class IdentityModule { }
