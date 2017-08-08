import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { Question } from './question/question';
import { Category } from './categories/category';
import { User } from '../login/user';

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

  retrieveCategory(categoryId): Observable<Category> {
    return this.http.get('http://localhost:3000/category/' + categoryId)
      .map(response => {
          const categoryObj = response.json();
          let category = new Category();
          category.categoryName = categoryObj.categoryName;
          category.id = categoryObj._id;

          return category;
        })
      .catch(this.handleError);
  }

  createQuestion(quesObj): Observable<Question> {
    return this.http.post('http://localhost:3000/question', quesObj)
      .map(response => {
        const quesObj = response.json();
        let question = new Question(quesObj);

        return question;
      })
      .catch(this.handleError);
  }

  listQuestion() {
    return this.http.get('http://localhost:3000/questions')
      .map(response => {
        let questions: Question[] = [];
        response.json().forEach((questionObj) => {
          questions.push(new Question(questionObj));
        });
        return questions;
      })
      .catch(this.handleError);
  }

  retrieveQuestion(categoryId) {
    return this.http.get('http://localhost:3000/question/' + categoryId)
      .map(response => {
        let question: Question[] = [];
        response.json().forEach((questionObj) => {
          question.push(new Question(questionObj));
        });
        return question;
      })
      .catch(this.handleError);
  }

  listUsers(): Observable<User[]> {
    return this.http.get('http://localhost:3000/users')
      .map(response => {
        let users: User[] = [];
        response.json().forEach((userObj) => {
          let user = new User(userObj);

          users.push(user)
        });

        return users;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any): Observable<any> {
    return Observable.throw(error.json());
  }
}
