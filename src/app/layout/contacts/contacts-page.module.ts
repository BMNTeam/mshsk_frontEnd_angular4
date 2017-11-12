import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule} from "../../shared/modules/page-header/page-header.module";
import { NgbAlertModule, NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import { HeaderModule } from "../../shared/header/header.module";
import { ContactsRoutingModule } from "./contacts.routing.module";
import { ContactsPageComponent } from "./contacts-page.component";
import {ReCaptchaModule} from "angular2-recaptcha";
import {FormsModule} from "@angular/forms";



// todo fix problems with current namespace

@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        ContactsRoutingModule,
        NgbAlertModule.forRoot(),
        HeaderModule,
        NgbCarouselModule.forRoot(),
        ReCaptchaModule,
        FormsModule
    ],
    declarations: [ContactsPageComponent]
})

export class ContactsPageModule { }
