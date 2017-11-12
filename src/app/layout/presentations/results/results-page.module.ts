import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from "../../../shared/buttons/buttons.module";
import { PageHeaderModule} from "../../../shared/modules/page-header/page-header.module";
import { NgbAlertModule, NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderModule } from "../../../shared/header/header.module";
import {ResultsRoutingModule} from "./results.routing.module";
import {ResultsPageComponent} from "./results-page.component";



// todo fix problems with current namespace

@NgModule({
    imports: [
        CommonModule,
        ButtonsModule,
        PageHeaderModule,
        ResultsRoutingModule,
        NgbAlertModule.forRoot(),
        HeaderModule,
        NgbCarouselModule.forRoot()
    ],
    declarations: [ResultsPageComponent]
})
export class ResultsPageModule { }
