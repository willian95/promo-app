import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasicPromoPageRoutingModule } from './basic-promo-routing.module';

import { BasicPromoPage } from './basic-promo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasicPromoPageRoutingModule
  ],
  declarations: [BasicPromoPage]
})
export class BasicPromoPageModule {}
