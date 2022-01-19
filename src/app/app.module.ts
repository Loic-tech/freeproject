import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SingleProductComponent } from './product-list/single-product/single-product.component';
import { HeaderComponent } from './header/header.component';
import {AuthService} from "./services/auth.service";
import {ProductsService} from "./services/products.service";
import {AuthGuardService} from "./services/auth-guard.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HerosectionComponent } from './herosection/herosection.component';
import { ShopComponent } from './shop/shop.component';
import {NotifierModule} from "angular-notifier";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { CheckoutComponent } from './checkout/checkout.component';
import { FaqComponent } from './faq/faq.component';
import {NgHttpLoaderModule} from "ng-http-loader";


const appRoutes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'home',component: HomeComponent},
  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'shopping', component: ShopComponent},
  {path: 'products/view/:id', component: SingleProductComponent},
  {path: 'about', component: FooterComponent},
  {path: 'check', component: CheckoutComponent},
  {path: 'faq', component: FaqComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ProductListComponent,
    SingleProductComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HerosectionComponent,
    ShopComponent,
    CheckoutComponent,
    FaqComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NotifierModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgHttpLoaderModule.forRoot()
  ],
  providers: [
    AuthService,
    ProductsService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {  }
