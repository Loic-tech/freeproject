export class Product{

  constructor(id: string, name: string, image: string, price: number, description: string) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.price = price;
  }

  id: string;
  name: string;
  image: string;
  description: string;
  price: number;


}
