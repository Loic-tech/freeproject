import { Component, OnInit } from '@angular/core';
import {InfoUserModel} from "../Models/InfoUser.model";
import {Spinkit} from "ng-http-loader";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  totalCost: any;
  infoUser: InfoUserModel = JSON.parse(<string>localStorage.getItem('info-user'));
  emailOfUser!: string;
  spinnerStyle = Spinkit;
  constructor() { }

  ngOnInit(): void {
    this.totalCost = localStorage.getItem('total');
    this.emailOfUser = this.infoUser.email;
  }

}
