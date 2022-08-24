


import { RouterModule, Routes } from '@angular/router';

import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
    {path:'notfound', component: NotfoundComponent},
    {path:'**', redirectTo:'/notfound'}
  
  ]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingmodule{

}