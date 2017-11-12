import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TrustabilityPageComponent} from "./trustability-page.component";





const routes: Routes = [
    { path: '', component: TrustabilityPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrustabilityRoutingModule { }
