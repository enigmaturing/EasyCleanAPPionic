import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyUsagesPage } from './my-usages.page';

const routes: Routes = [
  {
    path: '',
    component: MyUsagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyUsagesPageRoutingModule {}
