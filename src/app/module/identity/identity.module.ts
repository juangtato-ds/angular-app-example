import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentityRoutingModule } from './identity-routing.module';
import { IdentityComponent } from './identity.component';
import { PageSharedModule } from 'src/app/ui/page-shared/page-shared.module';
import { PlainIdentityFormComponent } from './plain-identity-form/plain-identity-form.component';
import { TemplateDrivenIdentityFormComponent } from './template-driven-identity-form/template-driven-identity-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FbIdentityFormComponent } from './fb-identity-form/fb-identity-form.component';
import { IdentityFormComponent } from './identity-form/identity-form.component';
import { IdentityWithAttributesFormComponent } from './identity-with-attributes-form/identity-with-attributes-form.component';


@NgModule({
  declarations: [
    IdentityComponent,
    PlainIdentityFormComponent,
    TemplateDrivenIdentityFormComponent,
    FbIdentityFormComponent,
    IdentityFormComponent,
    IdentityWithAttributesFormComponent,
  ],
  imports: [
    CommonModule,
    IdentityRoutingModule,

    FormsModule,
    ReactiveFormsModule,

    PageSharedModule
  ]
})
export class IdentityModule { }
