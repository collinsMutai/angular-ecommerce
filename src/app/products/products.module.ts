import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShortenPipe } from '../pipes/Shorten';

import { ProductsRoutingModule } from './ProductsRoutingModule';
import { SearchPipe } from '../pipes/SearchPipe';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditproductComponent,
    ProductdetailsComponent,
    ProductsComponent,
    AddProductComponent,
    SearchPipe,
    ShortenPipe
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
