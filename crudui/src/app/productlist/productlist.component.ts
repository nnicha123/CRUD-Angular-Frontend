import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Product } from '../product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private _service:NgserviceService, private _route:Router) { }
  products:Product[];
  ngOnInit() {
    this._service.fetchProductListFromRemote().subscribe(
      data => this.products=data,
      error => console.log("error response")
    )
  }
  goToAddProduct(){
    this._route.navigate(['/addproduct'])
  }
  goToEditProduct(id:number){
    console.log("id"+id);
    this._route.navigate(['/editproduct',id])
  }
  goToViewProduct(id:number){
    console.log("id"+id);
    this._route.navigate(['/viewproduct',id])
  }
  deleteProduct(id:number){
    this._service.deleteProductByIdFromRemote(id).subscribe(
      data => {
        console.log(data)
        this._route.navigate(['productlist'])
      },
      error => console.log("Exception occured")
    )
  }
}
