import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminIdentityRoutingModule } from './admin-identity-routing.module';
import { UserListPageComponent } from './page/user-list-page/user-list-page.component';
import { UserCreationPageComponent } from './page/user-creation-page/user-creation-page.component';
import { UserEditionPageComponent } from './page/user-edition-page/user-edition-page.component';
import { IdentityFormComponent } from './component/identity-form/identity-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageSharedModule, StructModule } from 'jgt-layout';


@NgModule({
  declarations: [
    IdentityFormComponent,
    UserListPageComponent,
    UserCreationPageComponent,
    UserEditionPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    AdminIdentityRoutingModule,

    StructModule,
    PageSharedModule
  ]
})
export class AdminIdentityModule { }
