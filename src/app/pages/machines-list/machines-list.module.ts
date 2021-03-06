import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachinesListPageRoutingModule } from './machines-list-routing.module';

import { MachinesListPage } from './machines-list.page';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { CountdownModule, CountdownGlobalConfig } from 'ngx-countdown';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachinesListPageRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    CountdownModule
  ],
  declarations: [MachinesListPage],
  providers: [CountdownGlobalConfig]
})
export class MachinesListPageModule {}
