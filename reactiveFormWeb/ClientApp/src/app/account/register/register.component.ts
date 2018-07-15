import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUserInfo } from '../user-info';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router) { }
  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = this.fb.group({
      email: '',
      password: '',
    });
  }

  loguearse() {
    let userInfo: IUserInfo = Object.assign({}, this.formGroup.value);
    this.accountService.login(userInfo).subscribe(token => this.recibirToken(token),
      error => this.manejarError(error));
  }

  registrarse() {
    let userInfo: IUserInfo = Object.assign({}, this.formGroup.value);
    this.accountService.create(userInfo).subscribe(token => this.recibirToken(token),
      error => this.manejarError(error));
  }

  recibirToken(token) {
    localStorage.setItem('token', token.token);
    localStorage.setItem('tokenExpiration', token.expiration);
    this.router.navigate([""]);
  }

  manejarError(error) {
    if (error && error.error) {
      alert(error.error[""]);
    }
  }

}
