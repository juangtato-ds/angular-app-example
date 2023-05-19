import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentityRoutingModule } from './identity-routing.module';
import { IdentityComponent } from './identity.component';
import { PageSharedModule } from '../../ui/page-shared/page-shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
