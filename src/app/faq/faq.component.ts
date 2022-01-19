import { Component, OnInit } from '@angular/core';
import {Spinkit} from "ng-http-loader";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  spinnerStyle = Spinkit;
  constructor() { }

  ngOnInit(): void {
  }

}
