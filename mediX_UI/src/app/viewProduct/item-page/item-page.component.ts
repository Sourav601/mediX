import { Component, OnInit } from '@angular/core';
import { SingleProductInListComponent } from '../single-product-in-list/single-product-in-list.component';
@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

show: boolean = false;

  singleObj = new SingleProductInListComponent();
  name:string = this.singleObj.name;
  vendor : string = this.singleObj.vendor;
  category : string = this.singleObj.category;
  price : number = this.singleObj.price;
  description : string = this.singleObj.description;
  img_url : string = this.singleObj.img_url;
  constructor() { }
  ngOnInit(): void {
  }

  showfun(){
    this.show = true;
  }
}