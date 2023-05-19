import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { SideNavMenuComponent } from './side-nav-menu/side-nav-menu.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { ModalComponent } from './modal/modal.component';
import { ModalDirective } from './modal/modal.directive';
import { ModalService } from './service/modal.service';
import { InternalModalService } from './service/internal-modal.service';
import { PlainTextModalContentComponent } from './modal/plain-text-modal-content/plain-text-modal-content.component';
import { ModalDialogDirective } from './modal/modal-dialog/modal-dialog.directive';



@NgModule({
  declarations: [
    LayoutComponent,
    SideNavMenuComponent,
    LayoutHeaderComponent,
    ModalComponent,
    ModalDirective,
    PlainTextModalContentComponent,
    ModalDialogDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {
  static forRoot(): ModuleWithProviders<LayoutModule> {
    return {
      ngModule: LayoutModule,
      providers: [
        {
          provide: ModalService,
          useExisting: InternalModalService
        }
      ]
    };
  }
}
