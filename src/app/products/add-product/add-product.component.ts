import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private _productService:ProductService) { }

  ngOnInit(): void {
  }
  c:any="";
  onSubmit(form:NgForm){
    this.c=form.value.Defaultfile.split('\\')
    // console.log(this.c[this.c.length-1]);


    let newProduct = {
      id:123,
      categoryId:parseInt(form.value.categoryId),
      productName:form.value.productName,
      description:form.value.description,
      price:parseInt(form.value.price),
      product_image:"http://localhost:4200/assets/"+this.c[this.c.length-1]
    }
    // console.log(newProduct)
    this._productService.createProduct(newProduct).subscribe(res=>{
      console.log(res)
    })
  }

}
