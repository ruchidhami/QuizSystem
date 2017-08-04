import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { Category } from './categories/category';

@Injectable()
export class DashboardService {
  constructor(private http: Http) {
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

  private handleError(error: Response | any): Observable<any> {
    return Observable.throw(error.json());
  }
}
