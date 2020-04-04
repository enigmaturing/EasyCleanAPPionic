import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyUsagesPageRoutingModule } from './my-usages-routing.module';

import { MyUsagesPage } from './my-usages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyUsagesPageRoutingModule
  ],
  declarations: [MyUsagesPage]
})
export class MyUsagesPageModule {}
