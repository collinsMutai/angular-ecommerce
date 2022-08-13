import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      name: 'Laptop',
      price: 300.90,
      url: 'assets/images/8dayskenya.jpg',
      inStock: true,
      sellingAt:199.99,
      description:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, quod.'
    },
    {
      name: 'Printer',
      price: 300,
      url: 'assets/images/9 days kenya.jpeg',
      inStock: true,
      sellingAt:199.99,
      description:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, quod.'
    },
    {
      name: 'Desktop',
      price: 300,
      url: 'assets/images/13 days kenya safari.jpeg',
      inStock: false,
      sellingAt:199.99,
      description:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, quod.'
    },
    {
      name: 'Hard Disk',
      price: 300,
      url: 'assets/images/adventure.jpg',
      inStock: true,
      sellingAt:199.99,
      description:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, quod.'
    },
    {
      name: 'Laptop',
      price: 300,
      url: 'assets/images/easter.jpg',
      inStock: true,
      sellingAt:199.99,
      description:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, quod.'
    },
    {
      name: 'Laptop',
      price: 300,
      url: 'assets/images/honeymoon.jpg',
      inStock: true,
      sellingAt:199.99,
      description:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, quod.'
    },
    {
      name: 'Laptop',
      price: 300,
      url: 'assets/images/shortbreaks.jpg',
      inStock: false,
      sellingAt:199.99,
      description:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, quod.'
    },
    {
      name: 'Laptop',
      price: 300,
      url: 'assets/images/valentines.jpg',
      inStock: true,
      sellingAt:199.99,
      description:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, quod.'
    }
  ]
  date= new Date()
  filter=''
  name=''
  url=''
  price=0
  company='The Jitu Company'
  day = new Date().getDay()
  sellingAt=0
  description=''
  OnAdd(){
    this.products.push({
      name:this.name,
      url:this.url,
      price:this.price,
      inStock:true,
      sellingAt:this.sellingAt,
      description:this.description,
      filter:this.filter
    })
  }

  getDiscount(price:number, selling:number){
    const diff = price - selling
    return diff/price
  }
}
