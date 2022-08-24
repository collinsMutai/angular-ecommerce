import { Component, ElementRef, Input, OnInit, ViewChild, } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Product } from '../interfaces';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
 
 products!: Product[]
  date = new Date()
  filter = ''
  day = new Date().getDay()
  sellingAt = 0
  description = ''
  constructor(private productService:ProductService,
    private router:Router,
    private route:ActivatedRoute) { }
  ngOnInit(): void {
    // this.products = this.productService.products
    this.route.data.subscribe((data:Data)=>{
      this.products= data['products']
    })
   
  }
  getDiscount(price: number, selling: number) {
    const diff = price - selling
    return diff / price
  }

 onDelete(index:number){
  this.productService.deleteProduct(index)
 }
 onUpdate(index:number){
  this.productService.updateid.emit(index)
 }

 loadaddProduct(){
  this.router.navigate(['/add'],{relativeTo:this.route})
 }
 displayProduct(i:number){
  this.router.navigate(['product', i])
 }
}
