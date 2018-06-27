import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ServerService} from '../../../shared/services/server.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  form: FormGroup;
  body = {
    email: ''
  };

  constructor(private serverService: ServerService) {
  }

  ngOnInit() {
    this.initForm();
    localStorage.removeItem('prefillEmail');
  }

  private initForm(): void {
    this.form = new FormGroup({
      email: new FormControl(localStorage.getItem('prefillEmail'))
    });
  }

  onSubmit() {
    this.body.email = this.form.value['email'];
    this.sendEmail();
  }

  sendEmail() {
    this.serverService.postForgotPassword(this.body).subscribe(
      (response) => {
        if (response['error'] === null) {
          alert('We send you instruction to reset your password.');
        } else {
          alert('Email does not exists');
        }
      },
      (e) => {
        console.log(e);
      }
    );
  }
}
