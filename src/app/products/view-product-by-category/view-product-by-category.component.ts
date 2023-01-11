import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/site-layout/category';
import { ProductInterface } from '../product-interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {

  searchCategory:Category;
  productList:any={};
  constructor(private _actiRoute:ActivatedRoute,
    private _productService:ProductService) { }

  ngOnInit(): void {
    this._actiRoute.params.subscribe(data=>{
      this.searchCategory=data['id']


      this._productService.searchCategoryProduct().subscribe(categoryData=>{
        this.productList=categoryData
      })


      // this._productService.searchCategoryProduct(2).subscribe(res=>{
      //   console.log(res)
      // })

      
      
     
    })
    // 
    }

}
