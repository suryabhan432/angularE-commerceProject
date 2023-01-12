import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productID = 0;
  bodyId:any={};
  productDetail:any={}
  constructor(private activatedRoute: ActivatedRoute,
      private _productService:ProductService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productID = data['id'];
    })

    this._productService.viewProduct(this.productID).subscribe(pData=>{
      this.bodyId=pData   //get the existing data from product
      // console.log(this.bodyId)
    })
    // this._productService.updateProduct(this.productID,)

  }



  onUpdate(form:NgForm){
    let updatedProduct={
      id:this.productID,
      categoryId:parseInt(form.value.categoryId),
      productName:form.value.productName,
      description:form.value.description,
      price:parseInt(form.value.price),
      product_image:this.bodyId.product_image
    }
    // updatedProduct.product_image=this.bodyId.product_image
    

    
// console.log
    this._productService.updateProduct(this.productID,updatedProduct).subscribe(result=>{
      // this.productDetail=result
      console.log(result)
    })

   }

}
