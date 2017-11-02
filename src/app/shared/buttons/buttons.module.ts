import { NgModule} from "@angular/core";
import { ButtonsComponent} from "./buttons.component";
import {Routes, RouterModule, ROUTES} from "@angular/router";
import {LayoutRoutingModule} from "../../layout/layout-routing.module";

const routes: Routes = [
    {
        path: '', component: ButtonsComponent
    }
];

@NgModule ({
    //imports: [LayoutRoutingModule],
    declarations: [ButtonsComponent],
    exports: [ButtonsComponent],
    providers: [LayoutRoutingModule]
})

export class ButtonsModule { }
