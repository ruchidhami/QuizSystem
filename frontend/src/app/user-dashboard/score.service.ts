import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Score } from './score';

@Injectable()
export class ScoreService {
  constructor(private http: Http) {
  }

  private headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });


  createScore(scoreObj): Observable<Score> {
    return this.http.post('http://localhost:3000/scores', scoreObj)
      .map(response => {
        const scoreObj = response.json();
        let score = new Score(scoreObj);

        return score;
      })
      .catch(this.handleError);
  }

  fetchScore(userId, categoryId): Observable<Score> {
    return this.http.get('http://localhost:3000/users/' + userId + '/categories/' + categoryId + '/scores')
      .map(response => {
        const scoreObj = response.json();
        let score = new Score(scoreObj);

        return score;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any): Observable<any> {
    return Observable.throw(error.json());
  }
}
