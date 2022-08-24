import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../../interfaces';
import { ProductService } from '../../product.service';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
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
allowEdit!:boolean
  constructor(private route:ActivatedRoute,private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    // this.id =+this.route.snapshot.params['id']
    // this.product=this.productService.getoneProduct(this.id)
    this.route.params.subscribe((value:Params)=>{
      this.id=value['id']
      this.product=this.productService.getoneProduct(this.id)
    })
    this.route.queryParams.subscribe((params:Params)=>{
      console.log(params);
      this.allowEdit=params['allowEdit']=1?true:false
      
    })
  }
onDelete(){
this.productService.deleteProduct(this.id)
this.router.navigate(['../'],{relativeTo:this.route})
}
onEdit(){
  this.router.navigate(['edit'],{relativeTo:this.route, queryParamsHandling:'preserve'})
}
}
