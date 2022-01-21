import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../Models/Product.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ShopService} from "../../services/shop.service";
import {ShopModel} from "../../Models/Shop.model";
import {HttpErrorResponse} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {NotifierService} from "angular-notifier";
import {ToastrService} from "ngx-toastr";
import {Spinkit} from "ng-http-loader";
import {User} from "../../Models/User.model";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  id!: string;
  product!: Product;
  cart!: ShopModel;
  ide! : string;
  public signUpForm!: FormGroup
  valueNumber: number = 1;
  test: boolean = false;
  element: number = parseInt(<string>localStorage.getItem('quantity'));
  spinnerStyle = Spinkit;
  user = JSON.parse(<string>localStorage.getItem('info-user'));

  constructor(private route: ActivatedRoute,
              public productService: ProductsService,
              private router: Router,
              private shop: ShopService,
              private authService: AuthService,
              private toasterItem: ToastrService ) {}

  ngOnInit(): void {
    this.product = new Product('','','',0,'');
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(
      data => {
        this.product = data;
        localStorage.setItem('product',JSON.stringify(this.product));
      },
      error => {
        console.log(error);
      }
    );
  }

  public addCart(){
    this.test = true;
    //console.log(this.user.id);
    this.cart = new ShopModel(this.id,this.user.id.toString(), this.product, this.valueNumber);
   this.shop.addToCart(this.cart).subscribe(
      data =>{
          this.toasterItem.success('Successfully Added 😊!','Infos');
          this.test = false;
          localStorage.setItem('quantity',String(this.element + this.valueNumber));
          location.reload();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.toasterItem.error('please enter a good quantity !','Infos');
      }
    );
  }

  onBack(){
    this.router.navigate(['/products']);
  }
}
