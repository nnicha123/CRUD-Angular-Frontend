import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Product } from '../product';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  product = new Product();

  constructor(private _route:Router,private _service:NgserviceService,
    private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this._service.fetchProductByIdFromRemote(id).subscribe(
      data => {
        console.log(data);
        this.product = data;
      },
      error => console.log('exception occured')
    )
  }
  
  gotolist(){
    console.log('go back');
    this._route.navigate([''])
  }

}
