import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {
  show: boolean = false;

  id!: number;
  name!: string;
  vendor: string = 'vendor name';
  category: string = 'category name';
  price!: number;
  description: string = 'product desc';
  img_url: string = '';

  constructor(private router: Router, private _api: ApiService) {
    this.name = this.router.getCurrentNavigation()?.extras.state!['name'];
    this.price = this.router.getCurrentNavigation()?.extras.state!['price'];
    this.img_url = this.router.getCurrentNavigation()?.extras.state!['img'];
    this.category = this.router.getCurrentNavigation()?.extras.state!['cat'];
    this.id = this.router.getCurrentNavigation()?.extras.state!['id'];
  }
  ngOnInit(): void {
  }

  showfun() {
    this.show = true;
  }
  hidefun() {
    this.show = false;
  }
  addToCart(productId: any): void {
    this._api
      .post(
        {
          UserId: localStorage.getItem('mediX_UserId'),
          ProductsId: productId,
          Quantity: 1,
        },
        'api/carts'
      )
      .subscribe(
        (result: any) => {
          alert("Item Added to cart");
        },
        (err: any) => {
          alert('error');
        }
      );
  }
}

