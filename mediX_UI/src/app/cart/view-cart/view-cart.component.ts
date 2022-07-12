import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css'],
})
export class ViewCartComponent implements OnInit {
  cartList: any;
  url: string;
  constructor(private _api: ApiService) {
    this.cartList = [];
    this.url = 'api/Carts/User/' + localStorage.getItem('mediX_UserId');
  }

  ngOnInit(): void {
    // get list of carts
    this._api.get(this.url).subscribe(
      (result: any) => {
        //console.log(result);
        this.cartList = result;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  removeCart(cartId: any): void {
    this._api.delete('api/carts/' + cartId).subscribe(
      (result: any) => {
        alert('Item removed from cart');
        this.cartList = this.cartList.filter((c: any) => {
          c.Id != cartId;
        });
        this.ngOnInit();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
