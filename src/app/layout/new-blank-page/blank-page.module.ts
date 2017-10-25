import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';
import { RentModule } from "../../shared/rent/rent.module";

@NgModule({
  imports: [
    CommonModule,
    BlankPageRoutingModule,
      RentModule

  ],
  declarations: [BlankPageComponent]
})
export class BlankPageModule { }
