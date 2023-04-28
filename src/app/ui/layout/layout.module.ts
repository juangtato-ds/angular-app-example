import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { SideNavMenuComponent } from './side-nav-menu/side-nav-menu.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';



@NgModule({
  declarations: [
    LayoutComponent,
    SideNavMenuComponent,
    LayoutHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
