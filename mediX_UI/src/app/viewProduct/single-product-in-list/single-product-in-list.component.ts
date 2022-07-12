import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
@Component({
  selector: 'app-single-product-in-list',
  templateUrl: './single-product-in-list.component.html',
  styleUrls: ['./single-product-in-list.component.css'],
})
export class SingleProductInListComponent implements OnInit {
  @Input() product: any;
  constructor(private _api: ApiService) {}

  ngOnInit(): void {
    //console.log(this.product);
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
          alert(err);
        }
      );
    //console.log(localStorage.getItem('mediX_UserId'), productId);
  }
}
