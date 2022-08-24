import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../interfaces';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 product:Product={
  name:'',
  url:'',
  price:0,
  inStock:true,
  description:'',
  sellingAt:250,
  isAdmin:false
 }
id!:number
update=false
  constructor(private productService:ProductService,
    private router:Router) { 
    this.productService.updateid.subscribe(
      (value:number)=>{
        this.id=value
        this.product=this.productService.getoneProduct(value)
        this.update=true
      }
    )
  }

  ngOnInit(): void {
  }
  OnAdd(){
   if(!this.update){
    this.productService.addProduct(this.product)
    this.product={
      name:'',
      url:'',
      price:0,
      inStock:true,
      description:'',
      sellingAt:250,
      isAdmin:false
     }
     this.router.navigate(['product'])
   }
   this.productService.update(this.id, this.product)
   this.update=false
   this.product={
    name:'',
    url:'',
    price:0,
    inStock:true,
    description:'',
    sellingAt:250,
    isAdmin:false
   }
  }
}
