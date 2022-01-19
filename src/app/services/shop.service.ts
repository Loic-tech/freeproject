import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ShopModel} from "../Models/Shop.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShopService {


  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public addToCart(shop: ShopModel) : Observable<ShopModel>{
    return this.http.post<ShopModel>(`${this.apiServerUrl}/shop/adding`,shop);
  }

  public getCart(id: string): Observable<ShopModel[]>{
    return this.http.get<ShopModel[]>(`${this.apiServerUrl}/shop/cart/${id}`);
  }

  public modifyCart(id: string): Observable<ShopModel>{
    return this.http.get<ShopModel>(`${this.apiServerUrl}/shop/modifyq/${id}`);
  }

  public getCountOfCart(id: string): Observable<number> {
    return this.http.get<number>(`${this.apiServerUrl}/shop/count/${id}`);
  }


}
