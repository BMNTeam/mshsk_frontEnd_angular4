import {Component, OnInit} from '@angular/core';
import {routerTransition} from "../../../router.animations";
import {DataService} from "../../../data.service";


@Component({
    selector: 'app-perspective-page',
    templateUrl: './strategy-page.component.html',
    styleUrls: ['./strategy-page.component.scss'],
    animations: [routerTransition()]
})
export class StrategyPageComponent implements OnInit {
    sliders = [];
   constructor( public dataService: DataService) {
       this.sliders = dataService.generateSpecialImageUsingMacFeatures('strategy', 28)

   }

   ngOnInit() {
        console.dir(this.sliders);
   }

}
