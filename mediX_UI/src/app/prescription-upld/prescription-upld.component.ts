import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prescription-upld',
  templateUrl: './prescription-upld.component.html',
  styleUrls: ['./prescription-upld.component.css'],
})
export class PrescriptionUPLDComponent implements OnInit {
  file: any = null;

  constructor(private _api: ApiService, private _router: Router) {}

  ngOnInit(): void {}

  getFile(event: any): void {
    this.file = event.target.files[0];
  }
  onSubmit(contactForm: any) {
    //console.log(this.file);
    let formData = new FormData();
    formData.append('img', this.file);
    formData.append('userId', localStorage.getItem('mediX_UserId') || '');
    this._api.postFile(formData, 'api/orders').subscribe(
      (result: any) => {
        //console.log(result);
        this._router.navigate(['/success']);
      },
      (err: any) => {
        console.log(err);
        alert('Something worng happend. Try again after some time');
      }
    );
  }
}
