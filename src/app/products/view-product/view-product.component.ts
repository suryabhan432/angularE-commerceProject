import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from "rxjs/operators";
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
productID = 0;
proDetails:any={}
  constructor(private activatedRoute: ActivatedRoute,
    private _getApi:ProductService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productID = data['id'];
      // console.log(this.productID)
    })
    this._getApi.viewProduct().pipe(pluck(this.productID-1)).subscribe(res=>{
      this.proDetails=res
      // console.log(this.proDetails)
    })
  }

}
