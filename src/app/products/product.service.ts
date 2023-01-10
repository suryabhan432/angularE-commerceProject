import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable} from 'rxjs';   //from,
// import { ProductInterface } from './product-interface';
// import { Category } from '../site-layout/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  // createProduct(productBody):Observable<ProductInterface>{
  //   const baseUrl = "http://localhost:3000/products";
  //   return this.httpClient.post<ProductInterface>(baseUrl,productBody);
  // }

  viewProduct():Observable<any>{
    const baseUrl = "http://localhost:3000/product"
    return this.http.get(baseUrl);
  }

  // updateProduct(productId,productBody):Observable<ProductInterface>{
  //   const baseUrl = "http://localhost:3000/product"+productId;
  //   return this.httpClient.put<ProductInterface>(baseUrl,productBody);
  // }

  // deleteProduct(productId):Observable<ProductInterface>{
  //   const baseUrl = "http://localhost:3000/product"+productId;
  //   return this.httpClient.delete<ProductInterface>(baseUrl);
  // }

  // searchCategoryProduct(categoryId):Observable<ProductInterface>{
  //   const baseUrl = "http://localhost:3000/product/category="+categoryId;
  //   return this.httpClient.get<ProductInterface>(baseUrl);
  // }

  // searchDateProduct(dateParam):Observable<ProductInterface>{
  //   const baseUrl = "http://localhost:3000/product/date="+dateParam;
  //   return this.httpClient.get<ProductInterface>(baseUrl);
  // }

  getCategory():Observable<any>{
    // const categoryUrl = "http://localhost:3000/categories";
    return this.http.get('http://localhost:3000/categories');
  }

}
