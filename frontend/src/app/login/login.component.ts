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
  userList : User;
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
        console.log(response, "999")
      })
  }

  login() {
    this.userService.login(this.user)
      .subscribe((response) => {
        console.log(response,"2020")

        if(response.username === "admin" && response.email === "admin@admin.com" && response.role === "superAdmin"){
          this.router.navigate([`/app/home`]);
        }
        // else if(response.username === this.getByUsername()) {
        //   this.router.navigate([`/user/home`]);
        // }
        else{
          this.router.navigate([`/login`]);
        }
      })
  }

  refresh(): void {
    window.location.reload();
  }
}
