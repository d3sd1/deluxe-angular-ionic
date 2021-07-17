import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Error404PageComponent } from './core';

const routes: Routes = [
  // STORE
  {
    path: '',
    loadChildren: () => import('./store/home/store-home.module').then(m => m.StoreHomeModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./store/listing/store-listing.module').then(m => m.StoreListingModule)
  },
  {
    path: 'product/:slug',
    loadChildren: () => import('./store/product/store-product.module').then(m => m.StoreProductModule)
  },
  // AUTH
  {
    path: 'login',
    loadChildren: () => import('./auth/signin/auth-signin.module').then(m => m.AuthSigninModule)
  },
  {
    path: 'create-account',
    loadChildren:  () => import('./auth/signup/auth-signup.module').then(m => m.AuthSignupModule)
  },
  {
    path: 'recover-password',
    loadChildren: () => import('./auth/recover-password/auth-recover-password.module').then(m => m.AuthRecoverPasswordModule)
  },
  // USER
  {
    path: 'user',
    loadChildren:  () => import('./user/account/user-account.module').then(m => m.UserAccountModule)
  },
  // MISC
  {
    path: 'about',
    loadChildren:  () => import('./misc/about/misc-about.module').then(m => m.MiscAboutModule)
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '**',
    component: Error404PageComponent
  }
];

@NgModule({
  // Only call RouterModule.forRoot() in the root AppRoutingModule (or the AppModule if that's where you register
  // top level application routes). In any other module, you must call the RouterModule.forChild method to register additional routes.
  imports: [
    RouterModule.forRoot(routes, {
    // If you want to preload all lazy routes when the app loads, uncomment the following line
    // preloadingStrategy: PreloadAllModules,
    onSameUrlNavigation: 'reload',
    // This value is required for server-side rendering to work.
    initialNavigation: 'enabled'
})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
