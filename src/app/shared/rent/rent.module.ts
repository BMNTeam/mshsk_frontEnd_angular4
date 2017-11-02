import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RentComponent} from "./rent.component";
import { FormsModule} from "@angular/forms";


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [RentComponent],
    exports: [RentComponent]
})
export class RentModule { }
