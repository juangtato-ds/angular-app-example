import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './page-title/page-title.component';
import { PageSectionTitleComponent } from './page-section-title/page-section-title.component';



@NgModule({
  declarations: [
    PageTitleComponent,
    PageSectionTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageTitleComponent,
    PageSectionTitleComponent
  ]
})
export class PageSharedModule { }
