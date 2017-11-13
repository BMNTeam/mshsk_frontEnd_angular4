import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import {AuthService} from "../auth.service";
import {ReCaptchaModule} from "angular2-recaptcha";

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      ReCaptchaModule
  ],
    providers: [AuthService],
  declarations: [SignupComponent]
})
export class SignupModule { }
