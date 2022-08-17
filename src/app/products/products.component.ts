import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Product } from '../interfaces';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, AfterViewInit {
  // ViewChild references an element in a component with its elements
  @ViewChild('hello') paragraph!:ElementRef

  // ngOnInit intitiliazes a component
ngOnInit(): void {
  console.log(this.paragraph);
}

// ngAfterViewInit is called after the view has been added
ngAfterViewInit(): void {
  console.log(this.paragraph.nativeElement.textContent);
}

 @Input('product') products!:Product[]
  date= new Date()
  filter=''
  company='The Jitu Company'
  day = new Date().getDay()
  sellingAt=0
  description=''
  

  getDiscount(price:number, selling:number){
    const diff = price - selling
    return diff/price
  }
}
