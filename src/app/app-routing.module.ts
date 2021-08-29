import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './user/signin/signin.component';
import { LoginComponent } from './user/signup/login.component';
import { UserModule } from './user/user.module';

const routes: Routes = [
  { path: 'user', loadChildren: () => import('./user/user.module').then((m) => m.UserModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), UserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
