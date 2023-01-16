import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductscrudService } from 'src/app/services/productscrud.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent {
  id:any;
  product:any;
  constructor(private productscrud:ProductscrudService,private ar:ActivatedRoute,private router:Router){

  }

  ngOnInit():void
  {
    this.ar.params.subscribe(res=>{
      this.id=res['id'];
    });
    this.productscrud.getProductById(this.id).subscribe((res:any)=>{
      this.product=res;
    });
  }
  editproduct(name:any,description:any,price:any,quantity:any):void{
    this.productscrud.editProduct(this.id,{id:this.id,name:name,description:description,image:null,price:parseFloat(price),quantity:parseFloat(quantity)})
    .subscribe((res:any)=>{
       alert("Product Updated");
       this.router.navigate(['/']);
    });    
  }
}
