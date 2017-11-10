import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from "../../shared/buttons/buttons.module";
import { PageHeaderModule} from "../../shared/modules/page-header/page-header.module";
import {NgbAlertModule, NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import { HeaderModule } from "../../shared/header/header.module";
import {ImprovementsPageComponent} from "./improvements-page.component";
import {ImprovementsRoutingModule} from "./improvements.routing.module";


// todo fix problems with current namespace

@NgModule({
    imports: [
        CommonModule,
        ButtonsModule,
        PageHeaderModule,
        ImprovementsRoutingModule,
        NgbAlertModule.forRoot(),
        HeaderModule,
        NgbCarouselModule.forRoot()
    ],
    exports: [ImprovementsPageComponent],
    declarations: [ImprovementsPageComponent]
})
export class ImprovementsPageModule { }
