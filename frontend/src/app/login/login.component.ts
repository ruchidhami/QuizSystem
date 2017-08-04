import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';
import { UserService } from './user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  user = new User();
  constructor( private router: Router,
              private userService: UserService) { }

  ngOnInit() {

  }
  createUser() {
    this.userService.createUser(this.user)
      .subscribe((user) => {
        this.user = user;
      });
  }

  login() {
    this.userService.login(this.user)
      .subscribe(() => {
        this.router.navigate([`/app/home`]);
      })
  }

  refresh(): void {
    window.location.reload();
  }
}
