import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-by-category',
  templateUrl: './view-by-category.component.html',
  styleUrls: ['./view-by-category.component.css'],
})
export class ViewByCategoryComponent implements OnInit {
  categoryType: string;
  categoryValue: string;

  constructor(private _route: ActivatedRoute) {
    this.categoryType = '';
    this.categoryValue = '';
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: any) => {
      this.categoryType = params['categoryType'];
      this.categoryValue = params['categoryValue'];
    });
  }
}
