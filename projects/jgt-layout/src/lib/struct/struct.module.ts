import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ParentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ParentComponent
  ]
})
export class StructModule { }
