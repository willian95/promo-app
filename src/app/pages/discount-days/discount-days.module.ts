import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscountDaysPageRoutingModule } from './discount-days-routing.module';

import { DiscountDaysPage } from './discount-days.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscountDaysPageRoutingModule
  ],
  declarations: [DiscountDaysPage]
})
export class DiscountDaysPageModule {}
