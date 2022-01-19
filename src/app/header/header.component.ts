import { Component, OnInit } from '@angular/core';
import {TokenstorageService} from "../tokenstorage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ShopService} from "../services/shop.service";
import {InfoUserModel} from "../Models/InfoUser.model";
import {Spinkit} from "ng-http-loader";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth = true;
  count: number = 100;
  id!: string;
  numberOfElementsInTheCard: number = 0 ;
  // @ts-ignore
  userInfo: InfoUserModel = JSON.parse(<string>localStorage.getItem('info-user'));
  itemId!: string;
  usernameOfUser!: string;
  spinnerStyle = Spinkit;

  constructor(private tokenStorage: TokenstorageService,
              public shop: ShopService,
              private route: ActivatedRoute,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.getNumberOfCardFromUser();
    this.usernameOfUser = this.userInfo.username;
    }

    getNumberOfCardFromUser(): void {
      // @ts-ignore
      this.itemId = window.sessionStorage.getItem('auth-user').substring(209, 233);
      this.shop.getCountOfCart(this.itemId).subscribe(
        data => {
          this.numberOfElementsInTheCard += data;
        },
        error => {
          console.log(error);
        }
      );
    }

    test(): boolean{
        return !!sessionStorage.getItem('auth-user');
    }

  reloadPage(): void {
    window.location.reload();
  }

    direction(){
      this.router.navigate(['products']);
      this.reloadPage();
    }

    logout(){
      this.tokenStorage.signOut();
      this.direction();
      location.reload();
    }
  }







