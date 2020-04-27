import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicPromoPage } from './basic-promo.page';

const routes: Routes = [
  {
    path: '',
    component: BasicPromoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicPromoPageRoutingModule {}
