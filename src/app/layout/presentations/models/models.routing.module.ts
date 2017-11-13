import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModelsPageComponent} from "./models-page.component";





const routes: Routes = [
    { path: '', component: ModelsPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModelsRoutingModule { }
