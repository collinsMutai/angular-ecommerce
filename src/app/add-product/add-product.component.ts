import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../interfaces';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  name=''
  url=''
  price=0
  // event emitting data to the parent
 @Output('add') addProduct=new EventEmitter<Product>()
  constructor() { }

  ngOnInit(): void {
  }
  OnAdd(){
    this.addProduct.emit({
      name:this.name,
      price:this.price,
      inStock:true,
      url:this.url,
      sellingAt:this.price * 0.8,
      description:'Product description'
    } )
  }
}
