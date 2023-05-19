import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { adminGuard } from './guard/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [adminGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'identity'
      },
      {
        path: 'identity',
        loadChildren: () => import('./admin-identity/admin-identity.module').then(m => m.AdminIdentityModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
