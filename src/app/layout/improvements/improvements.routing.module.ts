import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImprovementsPageComponent} from "./improvements-page.component";



const routes: Routes = [
    { path: '', component: ImprovementsPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ImprovementsRoutingModule { }
