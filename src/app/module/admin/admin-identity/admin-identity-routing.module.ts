import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListPageComponent } from './page/user-list-page/user-list-page.component';
import { UserCreationPageComponent } from './page/user-creation-page/user-creation-page.component';
import { UserEditionPageComponent } from './page/user-edition-page/user-edition-page.component';
import { ParentComponent } from 'jgt-layout';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: UserListPageComponent,
        title: 'Listado de Usuarios'
      },
      {
        path: 'create',
        component: UserCreationPageComponent,
        title: 'Crear Usuario'
      },
      {
        path: ':' + UserEditionPageComponent.PARAM_ID,
        component: UserEditionPageComponent,
        title: 'Editar Usuario'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminIdentityRoutingModule { }
