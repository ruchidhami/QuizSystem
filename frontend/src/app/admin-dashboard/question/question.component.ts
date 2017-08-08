import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../dashboard.service';
import { Category } from '../categories/category';
import { Question } from './question';

@Component({
  selector: 'app-add-question-page',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  providers: [DashboardService]
})
export class QuestionComponent implements OnInit {
  categories: Category[];
  question = new Question({});

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.listCategory();
  }

  listCategory(){
    this.dashboardService.listCategory()
      .subscribe((categories) => {
        this.categories = categories;
      })
  }

  createQuestion() {
    this.dashboardService.createQuestion(this.question)
      .subscribe((question) => {
        debugger
        this.question = question;
      })
  }

  refresh():void {
    window.location.reload();
  }

}
