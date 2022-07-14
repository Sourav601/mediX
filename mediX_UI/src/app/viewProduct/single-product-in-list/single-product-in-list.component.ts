import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-single-product-in-list',
  templateUrl: './single-product-in-list.component.html',
  styleUrls: ['./single-product-in-list.component.css'],
})
export class SingleProductInListComponent implements OnInit {
  @Input() product: any;
  isAuthorized! : boolean;
  constructor(private _api: ApiService, private router: Router) { }
  navigate() {
    this.router.navigate(['/item'], {
      state: {
        name: this.product.Name,
        price: this.product.Price,
        img: this.product.ImageUrl,
        cat: this.product.Category,
        id: this.product.Id,
        desc: this.product.Descriptions,
        vendor: this.product.Vendor
      }
    });
  }

  ngOnInit(): void {
    this._api.get('api/authorized').subscribe(
      (result: any) => {
        if (result) {
          this.isAuthorized = true;
        }
      },
      (error: any) => {
        this.isAuthorized = false;
      }
    );
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
    //console.log(localStorage.getItem('mediX_UserId'), productId);
  }
}
