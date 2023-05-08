import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'chat' },
  {
    path: 'chat',
    loadChildren: () => import('./module/chat/chat.module').then(m => m.ChatModule)
  },
  { path: 'identity', loadChildren: () => import('./module/identity/identity.module').then(m => m.IdentityModule) },
  { path: 'http-example', loadChildren: () => import('./module/http-example/http-example.module').then(m => m.HttpExampleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
