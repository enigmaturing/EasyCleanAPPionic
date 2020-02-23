import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'sales-list',
    loadChildren: () => import('./pages/sales-list/sales-list.module').then( m => m.SalesListPageModule)
  },
  {
    path: 'clients-list',
    loadChildren: () => import('./pages/clients-list/clients-list.module').then( m => m.ClientsListPageModule)
  },
  {
    path: 'machines-list',
    loadChildren: () => import('./pages/machines-list/machines-list.module').then( m => m.MachinesListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
