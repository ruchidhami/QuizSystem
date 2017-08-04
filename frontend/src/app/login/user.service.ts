import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { User } from './user';

@Injectable()
export class UserService {
  constructor(private http: Http) {
  }
  private headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });

  createUser(userObj): Observable<User> {
    return this.http.post('http://localhost:3000/user/signup', userObj)
      .map(response => {
        const userObj = response.json();
        let user = new User();
        user.id = userObj.id;
        user.username = userObj.username;
        user.password = userObj.password;
        user.email = userObj.email;

        return user;
      })
      .catch(this.handleError);
  }

  login(userData){
    return this.http.post('http://localhost:3000/user/signin', userData)
      .map(response => {
        console.log(response)
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any): Observable<any> {
    return Observable.throw(error.json());
  }
}
