import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { Product } from '../../interfaces';
import { ProductService } from '../../product.service';
import { CanDeaactivateComponent } from '../../Services/deactivate.guard';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit, CanDeaactivateComponent {
  name=''
  url=''
  price=0
  inStock=true
  description=''
  sellingAt=250
  isAdmin=false
  product!:Product
   id!:number
   savedChanges=false
   title=''
  constructor(private route:ActivatedRoute,private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((value:Params)=>{
      this.id=value['id']
      this.product=this.productService.getoneProduct(this.id)
      this.name=this.product.name
      this.description=this.product.description
      this.price=this.product.price
      this.url=this.product.url
    })
    this.route.data.subscribe((data:Data)=>{
      this.title=data['title']
    })
  }
  canDeactivate():boolean{
    if((
      this.name!==this.product.name ||
      this.description !==this.product.description||
      this.price !==this.product.price||
      this.url!==this.product.url
    )
    && !this.savedChanges){
      return confirm('Do you really want to discard the changes?')
    }else{
      return true
    }
   
  }
  onUpdate(){
    this.productService.update(this.id, {
      name:this.name,
      url:this.url,
      price:this.price,
      description:this.description,
      inStock:true,
      sellingAt:this.sellingAt,
      isAdmin:true
    })
    this.savedChanges=true
    // this.router.navigate(['product'])
    this.router.navigate(['../../'],{relativeTo:this.route})
  }

}
