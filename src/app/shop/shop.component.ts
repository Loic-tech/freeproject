import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ShopService} from "../services/shop.service";
import {ShopModel} from "../Models/Shop.model";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute, Route} from "@angular/router";
import {Product} from "../Models/Product.model";
import {AuthModel} from "../Models/Auth.model";
import {InfoUserModel} from "../Models/InfoUser.model";
import {Spinkit} from "ng-http-loader";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  cart: ShopModel[] = [];
  ide!: string;
  total: number = 0;
  quantity: number = 0;
  spinnerStyle = Spinkit;
  user = JSON.parse(<string>localStorage.getItem('info-user'));

  constructor(
    private route: ActivatedRoute,
    private shop: ShopService) { }

  ngOnInit(): void {
    this.getCardOfUser();
  }

  getCardOfUser(): void {
    // @ts-ignore
    this.ide = window.sessionStorage.getItem('auth-user').substring(209, 233);
    console.log(this.user.id);
    this.shop.getCart(this.user.id).subscribe(
      data => {
        this.cart = data;
        for (let i = 0 ; i < this.cart.length; i++) {
          this.total += this.cart[i].quantity * this.cart[i].product.price;
          this.quantity += this.cart[i].quantity;
        }
        localStorage.setItem('total', String(this.total));
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteItemInTheCard(id: string): void {
    this.shop.deleteItemInTheCart(id).subscribe(
      data => {
        this.getCardOfUser();
        location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }
}
