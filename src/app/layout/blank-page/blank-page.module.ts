import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';
import { RentModule } from "../../shared/rent/rent.module";
import { ButtonsModule} from "../../shared/buttons/buttons.module";
import {PageHeaderModule} from "../../shared/modules/page-header/page-header.module";

@NgModule({
  imports: [
    CommonModule,
    BlankPageRoutingModule,
      RentModule,
      ButtonsModule,
      PageHeaderModule

  ],
  declarations: [BlankPageComponent]
})
export class BlankPageModule { }
