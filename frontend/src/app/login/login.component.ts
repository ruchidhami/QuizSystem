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
  user = new User({});
  userList: User;

  constructor(private router: Router,
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

  /*listUser() {
   this.userService.listUser()
   .subscribe((listedUsers) => {
   listedUsers.forEach((listObj) => {
   let user = new User();
   user.username = listObj.username;

   return user;
   });
   })
   }*/

  getByUsername() {
    this.userService.getByUsername(this.user)
      .subscribe((response) => {
        // return response;
      })
  }

  login() {
    this.userService.login(this.user)
      .subscribe((loginUser) => {
        if (loginUser.username === 'admin' && loginUser.email === 'admin@admin.com' && loginUser.role === 'superAdmin') {
          this.router.navigate([`/admin/home`]);
        }
        else if (!loginUser.username) {
          this.router.navigate([`/signup`]);
        }
        else {
          this.router.navigate([`/user/home`]);
        }
      })
  }

  refresh(): void {
    window.location.reload();
  }
}
