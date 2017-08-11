import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie'

@Injectable()
export class SecurityService implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) {
  }

  canActivate() {
    const token = this.cookieService.get("authToken");
    if(token) {
      return true
    }
    this.router.navigate(['/login']);
  }
}
