import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockedUser = new Login("team3@mail.com", "team3");
  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(login: Login):boolean {
    if(this.checkCredentials(login)){
      this.isAuthenticated = true;
      this.router.navigate(['dashboard']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(login: Login): boolean{
    return this.checkEmail(login.getEmail()) && this.checkPassword(login.getPassword());
  }

  private checkEmail(email: string): boolean{
    return email === this.mockedUser.getEmail();
  }

  private checkPassword(password: string): boolean{
    return password === this.mockedUser.getPassword();
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }

}