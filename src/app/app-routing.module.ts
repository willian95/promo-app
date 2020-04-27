import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'admin/categories',
    loadChildren: () => import('./pages/admin/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'admin/locations',
    loadChildren: () => import('./pages/admin/locations/locations.module').then( m => m.LocationsPageModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./pages/post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'post-details',
    loadChildren: () => import('./pages/post-details/post-details.module').then( m => m.PostDetailsPageModule)
  },
  {
    path: 'select-promo-type',
    loadChildren: () => import('./pages/select-promo-type/select-promo-type.module').then( m => m.SelectPromoTypePageModule)
  },
  {
    path: 'basic-promo',
    loadChildren: () => import('./pages/postsTypes/basic-promo/basic-promo.module').then( m => m.BasicPromoPageModule)
  },
  {
    path: 'discount-days',
    loadChildren: () => import('./pages/discount-days/discount-days.module').then( m => m.DiscountDaysPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
