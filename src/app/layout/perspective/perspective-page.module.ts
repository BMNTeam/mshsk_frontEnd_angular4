import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from "../../shared/buttons/buttons.module";
import { PageHeaderModule} from "../../shared/modules/page-header/page-header.module";
import {NgbAlertModule, NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import { HeaderModule } from "../../shared/header/header.module";
import {PerspectivePageComponent} from "./perspective-page.component";
import {PerspectiveRoutingModule} from "./perspective.routing.module";


// todo fix problems with current namespace

@NgModule({
    imports: [
        CommonModule,
        ButtonsModule,
        PageHeaderModule,
        PerspectiveRoutingModule,
        NgbAlertModule.forRoot(),
        HeaderModule,
        NgbCarouselModule.forRoot()
    ],
    declarations: [PerspectivePageComponent]
})
export class PerspectivePageModule { }
