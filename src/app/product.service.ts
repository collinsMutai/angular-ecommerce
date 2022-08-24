import { EventEmitter, Injectable } from "@angular/core"
import { Product } from "./interfaces"
@Injectable({
  providedIn:'root'
})
export class ProductService {

  constructor() { }
  products: Product[] = 
  [
    {
      name: 'Laptop',
      price: 300.90,
      url: 'assets/images/8dayskenya.jpg',
      inStock: true,
      sellingAt:199.99,
      isAdmin:true,
      description:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, quod.'
    },
    // {
    //   name: 'Printer',
    //   price: 300,
    //   url: 'assets/images/9 days kenya.jpeg',
    //   inStock: true,
    //   sellingAt:199.99,
    //   description:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, quod.'
    // }
    // {
    //   name: 'Desktop',
    //   price: 300,
    //   url: 'assets/images/13 days kenya safari.jpeg',
    //   inStock: false,
    //   sellingAt:199.99,
    //   description:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, quod.'
    // },
    // {
    //   name: 'Hard Disk',
    //   price: 300,
    //   url: 'assets/images/adventure.jpg',
    //   inStock: true,
    //   sellingAt:199.99,
    //   description:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, quod.'
    // },
    // {
    //   name: 'Laptop',
    //   price: 300,
    //   url: 'assets/images/easter.jpg',
    //   inStock: true,
    //   sellingAt:199.99,
    //   description:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, quod.'
    // },
    // {
    //   name: 'Laptop',
    //   price: 300,
    //   url: 'assets/images/honeymoon.jpg',
    //   inStock: true,
    //   sellingAt:199.99,
    //   description:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, quod.'
    // },
    // {
    //   name: 'Laptop',
    //   price: 300,
    //   url: 'assets/images/shortbreaks.jpg',
    //   inStock: false,
    //   sellingAt:199.99,
    //   description:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, quod.'
    // },
    // {
    //   name: 'Laptop',
    //   price: 300,
    //   url: 'assets/images/valentines.jpg',
    //   inStock: true,
    //   sellingAt:199.99,
    //   description:'  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, quod.'
    // }
  ]


updateid=new EventEmitter<number>()

  getProduct(){
    return this.products
  }
  getoneProduct(index:number){
    return this.products[index]
  }
  update(index:number, updatedProduct:Product){
    this.products[index] = updatedProduct
  }
  deleteProduct(index:number){
    return this.products.splice(index, 1)
  }
  addProduct(newProduct:Product){
    console.log('adding'+ newProduct.name);
    
    this.products.push(newProduct)
  }
}
