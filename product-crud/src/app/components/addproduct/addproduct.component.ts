import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductscrudService } from 'src/app/services/productscrud.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  constructor(private productscrud:ProductscrudService,private ar:ActivatedRoute,private router:Router){

  }

  ngOnInit(): void {
  }  

  addproduct(name:any,description:any,price:any,quantity:any):void{
    this.productscrud.addProduct({id:0,name:name,description:description,image:null,price:parseFloat(price),quantity:parseFloat(quantity)})
    .subscribe((res:any)=>{
       alert("Product Created");
       this.router.navigate(['/'])
    });    
  }
}
