import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../dashboard.service';
import { Category } from './category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [DashboardService]
})
export class CategoriesComponent implements OnInit {
  category = new Category();
  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
  }

  createCategory() {
    this.dashboardService.createCategory(this.category)
      .subscribe((category) => {
        this.category = category;
        this.category.showSnackbar = true;
        window.location.reload();
      })
  }

}
