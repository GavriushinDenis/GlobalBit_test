import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor() {
  }

  public logIn() {
    this.isLoggedIn = true;
  }
}
