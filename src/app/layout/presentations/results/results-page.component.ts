import {Component, OnInit} from '@angular/core';
import {routerTransition} from "../../../router.animations";
import {DataService} from "../../../data.service";


@Component({
    selector: 'app-perspective-page',
    templateUrl: './results-page.component.html',
    styleUrls: ['./results-page.component.scss'],
    animations: [routerTransition()]
})
export class ResultsPageComponent implements OnInit {
    sliders = [];
   constructor( public dataService: DataService) {
       this.sliders = dataService.generateSpecialImageUsingMacFeatures('results', 25)

   }

   ngOnInit() {
        console.dir(this.sliders);
   }

}
