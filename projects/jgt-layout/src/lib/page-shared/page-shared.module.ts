import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './page-title/page-title.component';
import { PageSectionTitleComponent } from './page-section-title/page-section-title.component';
import { PageSectionComponent } from './page-section/page-section.component';



@NgModule({
  declarations: [
    PageTitleComponent,
    PageSectionTitleComponent,
    PageSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageTitleComponent,
    PageSectionTitleComponent,
    PageSectionComponent
  ]
})
export class PageSharedModule { }
