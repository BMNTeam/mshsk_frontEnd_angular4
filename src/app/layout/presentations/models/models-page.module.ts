import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from "../../../shared/buttons/buttons.module";
import { PageHeaderModule} from "../../../shared/modules/page-header/page-header.module";
import { NgbAlertModule, NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderModule } from "../../../shared/header/header.module";
import {ModelsRoutingModule} from "./models.routing.module";
import {ModelsPageComponent} from "./models-page.component";



// todo fix problems with current namespace

@NgModule({
    imports: [
        CommonModule,
        ButtonsModule,
        PageHeaderModule,
        ModelsRoutingModule,
        NgbAlertModule.forRoot(),
        HeaderModule,
        NgbCarouselModule.forRoot()
    ],
    declarations: [ModelsPageComponent]
})
export class ModelsPageModule { }
