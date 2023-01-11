import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

  viewAllProduct:any={}

  constructor(private _getProduct:ProductService) { }


  ngOnInit(): void {
    this._getProduct.viewAllProducts().subscribe(productData=>this.viewAllProduct=productData);
  }

}
