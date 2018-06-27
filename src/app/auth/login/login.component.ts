import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ServerService} from '../../../shared/services/server.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  body = {
    email: '',
    password: ''
  };


  constructor(private serverService: ServerService,
              private router: Router,
              private auth: AuthService) {
  }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this.body.email = this.form.value['email'];
    this.body.password = this.form.value['password'];
    this.login();
  }

  private login() {
    this.serverService.postLogin(this.body).subscribe(
      (response) => {
        console.log(response);
        if (response['error'] === null) {
          if (this.form.value['keepSignIn'] === true) {
            localStorage.setItem('email', response['user']['email']);
          }
          this.auth.logIn();
          this.router.navigate(['/layout']);
        } else {
          alert('Check your login and password');
        }
      },
      (e) => {
        console.log(e);
      }
    );
  }

  private initForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      keepSignIn: new FormControl(false)
    });
  }

  goToForgotPassword() {
    localStorage.setItem('prefillEmail', this.form.value['email']);
    this.router.navigate(['/auth/forgot-password']);
  }
}
