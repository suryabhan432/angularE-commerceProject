import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable} from 'rxjs';   //from,
import { Category } from '../site-layout/category';
import { ProductInterface } from './product-interface';
// import { Category } from '../site-layout/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  createProduct(productBody):Observable<any>{
    const baseUrl = "http://localhost:3000/product";
    return this.http.post(baseUrl,productBody);
  }

  viewProduct(item):Observable<any>{
    const baseUrl = "http://localhost:3000/product/"+item
    return this.http.get(baseUrl);
  }

  viewAllProducts():Observable<any>{
    const baseUrl = "http://localhost:3000/product"
    return this.http.get(baseUrl);
  }

  updateProduct(productId,productBody):Observable<ProductInterface>{
    const baseUrl = "http://localhost:3000/product/"+productId;
    return this.http.put<ProductInterface>(baseUrl,productBody);
  }

  deleteProduct(productId):Observable<ProductInterface>{
    const baseUrl = "http://localhost:3000/product/"+productId;
    return this.http.delete<ProductInterface>(baseUrl);
  }

  searchCategoryProduct():Observable<ProductInterface>{
    const baseUrl = "http://localhost:3000/product";
    return this.http.get<ProductInterface>(baseUrl);
  }

  // searchDateProduct(dateParam):Observable<ProductInterface>{
  //   const baseUrl = "http://localhost:3000/product/date="+dateParam;
  //   return this.httpClient.get<ProductInterface>(baseUrl);
  // }

  getCategory():Observable<Category>{
    // const categoryUrl = "http://localhost:3000/categories";
    return this.http.get<Category>('http://localhost:3000/categories');
  }

}
