import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/model/login';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isFormInvalid = false;
  areCredentialsInvalid = false;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  onSubmit(signInForm: NgForm){
    if(!signInForm.valid) {
      this.isFormInvalid=true;
      this.areCredentialsInvalid=false;
      return;
    }
    const login = new Login(signInForm.value.email, signInForm.value.password);
    this.checkCredentials(signInForm);
  }

  private checkCredentials(signInForm: NgForm){
    const login = new Login(signInForm.value.email, signInForm.value.password);
    if(!this.auth.authenticate(login)){
      this.isFormInvalid = false;
      this.areCredentialsInvalid = true;
    }
  }
}