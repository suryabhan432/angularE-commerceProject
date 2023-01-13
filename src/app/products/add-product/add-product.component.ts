import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private _productService:ProductService,
    router:Router
    ) { }
    totaldata:any={}

  ngOnInit(): void {
    this._productService.viewAllProducts().subscribe(data=>{
      this.totaldata=data[data.length-1].id          //find the id of last product added in data.json file
      // console.log("hello",this.totaldata)
    })
  }
  c:any="";
  onSubmit(form:NgForm){
    this.c=form.value.Defaultfile.split('\\')
    // console.log(this.c[this.c.length-1]);


    let newProduct = {
      id:this.totaldata+1,
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

    window.location.href="/";
  }

}
