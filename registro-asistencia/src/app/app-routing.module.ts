import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-users', pathMatch: 'full' },
  { path: 'list-users', component: ListUsersComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: '**', redirectTo: 'list-users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
