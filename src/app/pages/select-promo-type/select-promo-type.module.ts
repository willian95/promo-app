import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectPromoTypePageRoutingModule } from './select-promo-type-routing.module';

import { SelectPromoTypePage } from './select-promo-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectPromoTypePageRoutingModule
  ],
  declarations: [SelectPromoTypePage]
})
export class SelectPromoTypePageModule {}
