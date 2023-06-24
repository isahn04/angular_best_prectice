import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RouterModule } from '@angular/router';

const allComponent = [
  HeaderComponent,
  FooterComponent,
  LoginComponent,
  SignupComponent,
];

@NgModule({
  declarations: [...allComponent],
  imports: [CommonModule, RouterModule],
  exports:[...allComponent]
})
export class CoreModule {}
