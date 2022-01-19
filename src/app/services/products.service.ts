import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../Models/Product.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  Product!: Product;
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiServerUrl}/products/all`);
  }

  public getProductById(id: string): Observable<Product>{
    return this.http.get<Product>(`${this.apiServerUrl}/products/view/${id}`);
  }

}
