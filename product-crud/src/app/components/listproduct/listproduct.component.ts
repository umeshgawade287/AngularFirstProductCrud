import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductscrudService } from 'src/app/services/productscrud.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit  {
  products:any;
  constructor(private productscrud:ProductscrudService,private ar:ActivatedRoute,private router:Router){

  }
  ngOnInit(): void {
   this.productscrud.getAllProduct().subscribe((res:any)=>{
    this.products=res;
   });
  }
  del(id:any):void{
    if(confirm("Do you want to delete?")){
      this.productscrud.deleteProduct(id)
      .subscribe(()=>{
        alert("Product Deleted");
        this.productscrud.getAllProduct().subscribe((res:any)=>{
        this.products=res;
        });
      })
   }
  }

}
