import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalTestComponent } from './modal-test.component';

const routes: Routes = [{ path: '', component: ModalTestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalTestRoutingModule { }
