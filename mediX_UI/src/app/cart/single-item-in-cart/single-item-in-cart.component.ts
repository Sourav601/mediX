import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-item-in-cart',
  templateUrl: './single-item-in-cart.component.html',
  styleUrls: ['./single-item-in-cart.component.css']
})
export class SingleItemInCartComponent implements OnInit {
  qty : number = 2;
  name : string = 'product name';
  vendor : string = 'vendor name';
  category : string = 'category name';
  price : number = 100.0;
  description : string = 'product description';
  img_url : string = "https://cdn01.pharmeasy.in/dam/products_otc/270552/revital-h-men-multivitamin-with-calcium-zinc-ginseng-for-immunity-strong-bones-energy-30-capsules-2-1654077741.jpg?dim=224x0&dpr=1.25&q=100";
  constructor() { }

  ngOnInit(): void {
  }

}
