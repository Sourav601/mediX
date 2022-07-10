import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-cards',
  templateUrl: './category-cards.component.html',
  styleUrls: ['./category-cards.component.css'],
})
export class CategoryCardsComponent implements OnInit {
  categoryList: [];
  subCategoryList: [];

  constructor() {
    this.categoryList = [];
    this.subCategoryList = [];
  }

  ngOnInit(): void {
    console.log(this.categoryList);
    console.log(this.subCategoryList);
  }
}
