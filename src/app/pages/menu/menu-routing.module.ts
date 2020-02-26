import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'sales',
        loadChildren: () => import('../sales-list/sales-list.module').then( m => m.SalesListPageModule)
      },
      {
        path: 'clients',
        loadChildren: () => import('../clients-list/clients-list.module').then( m => m.ClientsListPageModule)
      },
      {
        path: 'machines',
        loadChildren: () => import('../machines-list/machines-list.module').then( m => m.MachinesListPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
