import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { LoginData } from '../../interfaces/login-data.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  
  submitted = false;
  
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit(): void { }

  login(loginData: LoginData) {
    this.authService
      .login(loginData)
      .then(() => this.router.navigate(['/list-users']))
      .catch((e) => {
        console.log(e.message);
        this.submitted = true;
      });
  }

  loginWithGoogle() {
    this.authService
      .loginWithGoogle()
      .then(() => this.router.navigate(['/list-users']))
      .catch((e) => console.log(e.message));
  }
}
