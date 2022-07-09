import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-by-category',
  templateUrl: './view-by-category.component.html',
  styleUrls: ['./view-by-category.component.css'],
})
export class ViewByCategoryComponent implements OnInit {
  categoryType: string = '';
  categoryValue: string = '';

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: any) => {
      console.log(params['categoryType'], params['categoryValue']);
    });
  
  }
}
