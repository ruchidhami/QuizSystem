import { Component, OnInit } from '@angular/core';

import { Category } from '../../admin-dashboard/categories/category';
import { DashboardService } from '../../admin-dashboard/dashboard.service';

@Component({
  selector: 'app-u-categories',
  templateUrl: './u-categories.component.html',
  styleUrls: ['./u-categories.component.css'],
  providers: [DashboardService]
})
export class UCategoriesComponent implements OnInit {
  categories: Category;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.listCategories()
  }

  listCategories(){
    this.dashboardService.listCategory()
      .subscribe((categories) => {
        this.categories = categories;
      })
  }

}
