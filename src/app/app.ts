import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IProduct } from '../models/product.model'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('first-web-app');
  
  productList : IProduct[] =[
    { id: 1, name: "laptop", price: 550, category: "technology" },
    { id: 2, name: "mobile", price: 400, category: "technology" },
    { id: 3, name: "headphones", price: 80, category: "accessories" },
    { id: 4, name: "keyboard", price: 60, category: "accessories" },
    { id: 5, name: "mouse", price: 35, category: "accessories" },
    { id: 6, name: "monitor", price: 250, category: "technology" },
    { id: 7, name: "tablet", price: 300, category: "technology" },
    { id: 8, name: "backpack", price: 45, category: "fashion" },
    { id: 9, name: "watch", price: 150, category: "fashion" },
    { id: 10, name: "speaker", price: 90, category: "accessories" }
  ]

  products = this.productList;
  filterProducts(category : string) : void{
    this.products = this.productList.filter(p => p.category===category)
  }
  showAll():void{
    this.products = this.productList;
  }
}
