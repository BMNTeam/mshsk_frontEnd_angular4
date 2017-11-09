import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InsideMonitoringPageComponent} from "./inside-monitoring-page.component";



const routes: Routes = [
    { path: '', component: InsideMonitoringPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InsideMonitoringRoutingModule { }
