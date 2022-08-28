import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { LoadingService } from './Services/loading.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent , data:{animation:'home'}},
  {
    path: 'product', canLoad: [AuthGuardService],
    data:{admin:true, animation:'product'},
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  { path: 'notfound', component: NotfoundComponent, data:{animation:'notfound'}},
  { path: '**', redirectTo: '/notfound' },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy:LoadingService})],
  exports: [RouterModule],
})
export class AppRoutingmodule {}
