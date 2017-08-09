import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { DashboardService } from '../../admin-dashboard/dashboard.service';

import { Category } from '../../admin-dashboard/categories/category'
import { Question } from '../../admin-dashboard/question/question'

@Component({
  selector: 'app-new-quiz',
  templateUrl: './new-quiz.component.html',
  styleUrls: ['./new-quiz.component.css'],
  providers: [DashboardService]
})
export class NewQuizComponent implements OnInit {
  questions: Question[];
  category = new Category();

  constructor(private activatedRoute: ActivatedRoute,
              private dashboardService: DashboardService) {
  }

  public categoryId = this.activatedRoute.snapshot.paramMap.get('id');

  ngOnInit() {
    this.retrieveCategory();
    this.retrieveQuestion()
  }

  retrieveQuestion() {
    this.dashboardService.retrieveQuestion(this.categoryId)
      .subscribe((question) => {
        this.questions = question;
      })
  }

  retrieveCategory() {
    this.dashboardService.retrieveCategory(this.categoryId)
      .subscribe((category) => {
        this.category = category;
      })
  }

  validateAnswer(choosedOption, ans, question) {
    if (!question.correctAnswerChoosen)
      if (ans === question.correctAnswer) {
        question.correctAnswerChoosen = true;
        choosedOption.style.color = 'green';
      } else {
        choosedOption.style.color = 'red';
      }
  }

  showAnswer(question) {
    question.displayAnswer = !question.displayAnswer;
  }

}
