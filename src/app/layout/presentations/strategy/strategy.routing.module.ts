import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StrategyPageComponent} from "./strategy-page.component";




const routes: Routes = [
    { path: '', component: StrategyPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StrategyRoutingModule { }
