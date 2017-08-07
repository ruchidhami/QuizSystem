import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { Question } from './question/quest';
import { Category } from './categories/category';

@Injectable()
export class DashboardService {
  constructor(private http: Http, private activatedRoute: ActivatedRoute) {
  }
  private headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });

  createCategory(categoryObj): Observable<Category> {
    return this.http.post('http://localhost:3000/category', categoryObj)
      .map(response => {
        const categoryObj = response.json();
        let category = new Category();
        category.categoryName = categoryObj.categoryName;

        return category;
      })
      .catch(this.handleError);
  }

  listCategory(): Observable<Category[]> {
    return this.http.get('http://localhost:3000/categories')
      .map(response => {
        let categories: Category[] = [];
        response.json().forEach((categoryObj) => {
          let category = new Category();
          category.id = categoryObj._id;
          category.categoryName = categoryObj.categoryName;

          categories.push(category)
        });

        return categories;
      })
      .catch(this.handleError);
  }

  createQuestion(quesObj): Observable<Question> {
    return this.http.post('http://localhost:3000/question', quesObj)
      .map(response => {
        const quesObj = response.json();
        let questions = new Question();
        questions.question = quesObj.question;
        questions.incorrectAnswer = quesObj.incorrectAnswer;
        questions.correctAnswer = quesObj.correctAnswer;
        questions.categoryId = quesObj.categoryId;

        return questions;
      })
      .catch(this.handleError);
  }

  retrieveQuestion(categoryId) {
    return this.http.get('http://localhost:3000/question/' + categoryId)
      .map(response => {
        let question: Question[] = [];
        response.json().forEach((questionObj) => {
          let quest = new Question();
          quest.question = questionObj.question;
          quest.incorrectAnswer = questionObj.incorrectAnswer;
          quest.correctAnswer = questionObj.correctAnswer;
          quest.categoryId = questionObj.categoryId;

          question.push(quest)
        });

        return question;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any): Observable<any> {
    return Observable.throw(error.json());
  }
}
