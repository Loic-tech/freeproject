import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../services/products.service";
import {Product} from "../Models/Product.model";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {Spinkit} from "ng-http-loader";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public Products!: Product[];
  spinnerStyle = Spinkit;

  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(): void {
    this.productService.getProducts().subscribe(
      (response: Product[]) => {
        this.Products = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getOneProduct(id: string){
        this.router.navigate(['products','view',id]);
      }
}
