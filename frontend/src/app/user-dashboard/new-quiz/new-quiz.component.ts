import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { CookieService } from 'ngx-cookie';

import { DashboardService } from '../../admin-dashboard/dashboard.service';
import { ScoreService } from '../score.service';

import { Category } from '../../admin-dashboard/categories/category';
import { Question } from '../../admin-dashboard/question/question';
import { Score } from '../score';
import { isUndefined } from 'util';

@Component({
  selector: 'app-new-quiz',
  templateUrl: './new-quiz.component.html',
  styleUrls: ['./new-quiz.component.css'],
  providers: [DashboardService, ScoreService, CookieService]
})
export class NewQuizComponent implements OnInit {
  questions: Question[];
  category = new Category();
  scoreObj = new Score({});
  score: Score;

  public p: number = 1;

  constructor(private activatedRoute: ActivatedRoute,
              private scoreService: ScoreService,
              private cookieService: CookieService,
              private dashboardService: DashboardService) {
  }

  public categoryId = this.activatedRoute.snapshot.paramMap.get('id');
  public userId = this.cookieService.get('userId');

  ngOnInit() {
    this.retrieveCategory();
    this.retrieveQuestion();
    this.fetchScore();
  }

  retrieveQuestion() {
    this.dashboardService.retrieveQuestion(this.categoryId)
      .subscribe((question) => {
        let shuffleQuestions: Question[] = [];
        let arr = [];
        while (shuffleQuestions.length < question.length) {
          const randomNumber = Math.ceil(Math.random() * question.length) - 1;
          if (arr.indexOf(randomNumber) > -1) continue;
          arr.push(randomNumber);
          shuffleQuestions.push(question[randomNumber])
        }
        this.questions = shuffleQuestions;
      })
  }

  retrieveCategory() {
    this.dashboardService.retrieveCategory(this.categoryId)
      .subscribe((category) => {
        this.category = category;
      })
  }

  scoreCount = 0;

  validateAnswer(choosedOption, ans, question) {
    if (!question.correctAnswerChoosen && !question.answerShown)
      if (ans === question.correctAnswer) {
        if (!question.wrongAsnwerChoosen && !question.answerShown)
          this.scoreCount += 10;
        question.correctAnswerChoosen = true;
        choosedOption.style.backgroundColor = 'rgba(11, 255, 22, 0.18)';
        choosedOption.style.border = '1px solid rgba(11, 255, 22, 0.18)';
        choosedOption.style.fontWeight = 'bold';
      } else {
        question.wrongAsnwerChoosen = true;
        choosedOption.style.backgroundColor = 'rgba(230, 41, 41, 0.06)';
        choosedOption.style.border = '1px solid rgba(230, 41, 41, 0.06)';
      }
  }

  showAnswer(question) {
    question.answerShown = true;
    question.displayAnswer = !question.displayAnswer;
  }

  getCorrectAnswerColor(question) {
    if (question.answerShown) {
      return 'rgba(11, 255, 22, 0.18)';
    } else {
      return '';
    }
  }

  updateScore(value) {
    this.scoreService.updateScore({ userId: this.userId, categoryId: this.categoryId, value: value })
      .subscribe((score) => {
        this.scoreObj = score;
        window.location.reload();
      })
  }

  fetchScore() {
    this.scoreService.fetchScore(this.userId, this.categoryId)
      .subscribe((score) => {
          this.score = score;
      })
  }
}
