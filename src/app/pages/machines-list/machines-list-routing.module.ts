import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachinesListPage } from './machines-list.page';

const routes: Routes = [
  {
    path: '',
    component: MachinesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachinesListPageRoutingModule {}
