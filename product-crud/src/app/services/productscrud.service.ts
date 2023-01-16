import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductscrudService {
  APIURL:string="https://localhost:44320/api/Product";

  constructor(private http:HttpClient) { 

  }

  getAllProduct() : any{
    return this.http.get(this.APIURL+"/GetAll");
  }
  getProductById(id:any){
    return this.http.get(`${this.APIURL}/${id}`)
  }
  addProduct(data:any){
    return this.http.post(this.APIURL,data)
  }
  deleteProduct(id:any){
    return this.http.delete(`${this.APIURL}/${id}`)
  }
  editProduct(id:any,data:any){
    return this.http.put(`${this.APIURL}?id=${id}`,data)
  }  

}
