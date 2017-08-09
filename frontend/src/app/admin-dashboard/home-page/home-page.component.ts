import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [DashboardService]
})
export class HomePageComponent implements OnInit {
  questionsCount: number;
  usersCount: number;
  categoriesCount: number;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.listQuestions();
    this.listUsers();
    this.listCategories()
  }

  listQuestions() {
    this.dashboardService.listQuestion()
      .subscribe((questions) => {
        this.questionsCount = questions.length;
      })
  }

  listUsers(){
    this.dashboardService.listUsers()
      .subscribe((users) => {
        this.usersCount = users.length;
      })
  }

  listCategories(){
    this.dashboardService.listCategory()
      .subscribe((categories) => {
        this.categoriesCount = categories.length;
      })
  }
}
