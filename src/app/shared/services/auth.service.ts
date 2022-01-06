import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    private userSubject: BehaviorSubject<string>;

    public get userTokenData(): string {
      return this.userSubject.value;
    }

    constructor(
      private cookieService: CookieService
    ) {
      this.userSubject = new BehaviorSubject<string>(this.cookieService.get('token'));
    }
  }