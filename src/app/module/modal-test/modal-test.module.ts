import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalTestRoutingModule } from './modal-test-routing.module';
import { ModalTestComponent } from './modal-test.component';
import { RichTextModalComponent } from './rich-text-modal/rich-text-modal.component';
import { FormModalComponent } from './form-modal/form-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageSharedModule } from 'jgt-layout';


@NgModule({
  declarations: [
    ModalTestComponent,
    RichTextModalComponent,
    FormModalComponent
  ],
  imports: [
    CommonModule,
    ModalTestRoutingModule,

    ReactiveFormsModule,

    PageSharedModule
  ]
})
export class ModalTestModule { }
