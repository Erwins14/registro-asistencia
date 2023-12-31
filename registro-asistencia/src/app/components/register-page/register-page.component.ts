import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { LoginData } from '../../interfaces/login-data.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})

export class RegisterPageComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit(): void { }

  register(data: LoginData) {
    this.authService
      .register(data)
      .then(() => {
        // this.authService.sendEmailVerification(); // Llama al método para enviar la verificación de correo
        this.router.navigate(['/']);
      })
      .catch((e) => console.log(e.message));
  }

}
