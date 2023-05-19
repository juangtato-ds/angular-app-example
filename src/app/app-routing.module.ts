import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loggedGuard } from './guard/logged.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'landing' },
  {
    path: 'landing',
    loadComponent: () => import('./module/landing/landing.component').then(m => m.LandingComponent)
  },
  {
    path: 'chat',
    canActivate: [loggedGuard],
    loadChildren: () => import('./module/chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: 'identity',
    loadChildren: () => import('./module/identity/identity.module').then(m => m.IdentityModule)
  },
  {
    path: 'sql',
    loadComponent: () => import('./module/sql-utils/sql-utils.component').then(m => m.SqlUtilsComponent)
  },
  {
    path: 'admin',
    loadChildren: () => import('./module/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'modal-test',
    loadChildren: () => import('./module/modal-test/modal-test.module').then(m => m.ModalTestModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
