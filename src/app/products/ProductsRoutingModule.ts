import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "../Services/auth-guard.service";
import { DeactivateGuard } from "../Services/deactivate.guard";
import { ProductResolverService } from "../Services/product-resolver.service";
import { AddProductComponent } from "./add-product/add-product.component";
import { EditproductComponent } from "./editproduct/editproduct.component";
import { EmptyComponent } from "./empty/empty.component";
import { ProductdetailsComponent } from "./productdetails/productdetails.component";
import { ProductsComponent } from "./products.component";


const appRoutes: Routes = [
 
    { path: 'add',   canActivate:[AuthGuardService]  ,component: AddProductComponent },
    { path: 'product', component: ProductsComponent,  resolve:{products:ProductResolverService} ,canActivateChild: [AuthGuardService],   children:[
      {path:'', component:EmptyComponent},
      { path: ':id', component: ProductdetailsComponent },
      { path: ':id/edit',  canDeactivate:[DeactivateGuard],data:{title:'The Updated Title'} ,component: EditproductComponent }
    ]}
  
  ]
  @NgModule({
    imports:[RouterModule.forChild(appRoutes)],
    exports:[RouterModule]
})

export class ProductsRoutingModule{}