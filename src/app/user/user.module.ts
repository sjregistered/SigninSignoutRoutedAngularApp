import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './signup/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {path : '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SigninComponent},
  {path: 'x', component: SigninComponent},
];

@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  // exports: [LoginComponent, SigninComponent] 
}) 
export class UserModule { }

