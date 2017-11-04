import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalyzePageComponent} from "./analyze-page.component";

const routes: Routes = [
    { path: '', component: AnalyzePageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AnalyzePageRoutingModule { }
