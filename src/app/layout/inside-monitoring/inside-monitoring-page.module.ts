import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from "../../shared/buttons/buttons.module";
import { PageHeaderModule} from "../../shared/modules/page-header/page-header.module";
import { AnalyzePageRoutingModule} from "./inside-monitoring.routing.module";
import { NgbAlertModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderModule } from "../../shared/header/header.module";
import {InsideMonitoringPageComponent} from "./inside-monitoring-page.component";

// todo fix problems with current namespace

@NgModule({
    imports: [
        CommonModule,
        ButtonsModule,
        PageHeaderModule,
        AnalyzePageRoutingModule,
        NgbAlertModule.forRoot(),
        HeaderModule
    ],
    declarations: [InsideMonitoringPageComponent]
})
export class InsideMonitoringPageModule { }
