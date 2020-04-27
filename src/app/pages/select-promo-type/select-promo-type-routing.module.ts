import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectPromoTypePage } from './select-promo-type.page';

const routes: Routes = [
  {
    path: '',
    component: SelectPromoTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectPromoTypePageRoutingModule {}
