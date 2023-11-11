import { Component, OnInit, inject } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'firebase/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent{

  user$!:Observable<User | null>;

  constructor(private authService: AuthService, private router: Router) {
    this.user$ = this.authService.userState;
  }

  async logout(): Promise<void> {
    await this.authService
      .logout()
      .then(() => this.router.navigate(['/']))
      .catch((e) => console.log(e.message));
  }

}
