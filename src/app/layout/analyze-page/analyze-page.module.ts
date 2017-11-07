import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyzePageComponent} from "./analyze-page.component";
import { ButtonsModule } from "../../shared/buttons/buttons.module";
import { PageHeaderModule} from "../../shared/modules/page-header/page-header.module";
import { AnalyzePageRoutingModule} from "./analyze-page-routing.module";
import { NgbAlertModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderModule } from "../../shared/header/header.module";

@NgModule({
    imports: [
        CommonModule,
        ButtonsModule,
        PageHeaderModule,
        AnalyzePageRoutingModule,
        NgbAlertModule.forRoot(),
        HeaderModule

    ],
    declarations: [AnalyzePageComponent]
})
export class AnalyzePageModule { }
