import {Component, OnInit} from '@angular/core';
import {Product} from "./Models/Product.model";
import {ProductsService} from "./services/products.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public Products!: Product[];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.getProducts();
  }

  public getProducts(): void {
    this.productService.getProducts().subscribe(
      (response: Product[]) =>{
        this.Products = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

}
