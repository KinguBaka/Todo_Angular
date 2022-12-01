import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth:boolean

  constructor() {
    this.isAuth = false;
  }

  login() {
    setTimeout(() => {
      this.isAuth = true;
    }, 1000)
  }

  logout() {
    this.isAuth = false
  }
}
