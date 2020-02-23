import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachinesListPageRoutingModule } from './machines-list-routing.module';

import { MachinesListPage } from './machines-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachinesListPageRoutingModule
  ],
  declarations: [MachinesListPage]
})
export class MachinesListPageModule {}
