import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PreparationsPageComponent} from "./preparations-page.component";





const routes: Routes = [
    { path: '', component: PreparationsPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PreparationsRoutingModule { }
