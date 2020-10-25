import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http:HttpClient) { }
  fetchProductListFromRemote():Observable<any>{
    return this._http.get<any>('http://localhost:8080/getproductlist')
  }
  fetchProductByIdFromRemote(id:number):Observable<any>{
    return this._http.get<any>('http://localhost:8080/getproductbyId/'+id);
  }
  addproductToRemote(product:Product):Observable<any>{
    return this._http.post<any>('http://localhost:8080/addproduct',product)
  }
  deleteProductByIdFromRemote(id:number):Observable<any>{
    return this._http.delete<any>('http://localhost:8080/deleteproductbyid/'+id);
  }
}
