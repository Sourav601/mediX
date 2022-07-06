import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isAuthorized: boolean;

  constructor(private _api: ApiService) {
    this.isAuthorized = false;
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
}
