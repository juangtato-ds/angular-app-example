import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserIdentityPipe } from './pipe/user-identity.pipe';



@NgModule({
  declarations: [
    UserIdentityPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserIdentityPipe
  ]
})
export class IdentitySharedModule { }
