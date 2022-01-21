import {Product} from "./Product.model";

export class ShopModel {
   id: string;
   ide: string;
   product: Product;
   quantity: number;


  constructor(id: string, ide: string, product: Product ,quantity: number) {
    this.id = id;
    this.ide = ide;
    this.product = product;
    this.quantity = quantity;
  }
}
