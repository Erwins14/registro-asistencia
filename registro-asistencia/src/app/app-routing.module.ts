import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { AttendanceComponent } from './components/attendance/attendance.component';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['list-users']);

const routes: Routes = [
  { path: '', component: LoginPageComponent, ...canActivate(redirectLoggedInToHome), },
  { path: 'register', component: RegisterPageComponent, ...canActivate(redirectLoggedInToHome), },
  { path: 'list-users', component: ListUsersComponent, ...canActivate(redirectUnauthorizedToLogin), },
  { path: 'create-user', component: CreateUserComponent, ...canActivate(redirectUnauthorizedToLogin), },
  { path: 'attendance', component: AttendanceComponent, ...canActivate(redirectUnauthorizedToLogin), },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
