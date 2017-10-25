import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RentComponent} from "./rent.component";



@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [RentComponent],
    exports: [RentComponent]
})
export class RentModule { }
