import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService, CookieService]
})
export class LoginComponent implements OnInit {
  user = new User({});

  constructor(private router: Router,
              private cookieService: CookieService,
              private userService: UserService) {
  }

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
      .subscribe((loginUser) => {
        if (loginUser.username === 'admin' && loginUser.email === 'admin@admin.com' && loginUser.role === 'superAdmin') {
          this.cookieService.put("authToken", loginUser.role);
          this.router.navigate([`/admin/home`]);
        }
        else if (!loginUser.username) {
          this.router.navigate([`/signup`]);
        }
        else {
          this.cookieService.put("authToken", "user");
          this.router.navigate([`/user/home`]);
        }
      })
  }

  refresh(): void {
    window.location.reload();
  }
}
