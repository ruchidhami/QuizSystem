import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { DashboardService } from '../dashboard.service';
import { Question } from '../question/question';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.css'],
  providers: [DashboardService]
})
export class ListQuestionsComponent implements OnInit {
  questions: Question[];
  constructor(private dashboardService: DashboardService, private activatedRoute: ActivatedRoute) { }

  public categoryId = this.activatedRoute.snapshot.paramMap.get('id');

  ngOnInit() {
    this.retrieveQuestion();
  }

  retrieveQuestion() {
    this.dashboardService.retrieveQuestion(this.categoryId)
      .subscribe((question) => {
        this.questions = question;
      })
  }

  deleteQuestion(id): void{
    this.dashboardService.deleteQuestion(id)
      .subscribe((response) => {
        debugger
        this.retrieveQuestion();
      })
  }

}
