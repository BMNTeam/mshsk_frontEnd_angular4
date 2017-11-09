import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialStateComponent} from "./financial-state.component";


@NgModule({
  imports: [
    CommonModule
  ],
    exports: [FinancialStateComponent],
  declarations: [FinancialStateComponent]
})
export class FinancialStateModule { }
