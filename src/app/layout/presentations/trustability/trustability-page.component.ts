import {Component, OnInit} from '@angular/core';
import {routerTransition} from "../../../router.animations";
import {DataService} from "../../../data.service";


@Component({
    selector: 'app-perspective-page',
    templateUrl: './trustability-page.component.html',
    styleUrls: ['./trustability-page.component.scss'],
    animations: [routerTransition()]
})
export class TrustabilityPageComponent implements OnInit {
    sliders = [];
   constructor( public dataService: DataService) {
       this.sliders = dataService.generateSpecialImageUsingMacFeatures('trustability', 23)

   }

   ngOnInit() {
        console.dir(this.sliders);
   }

}
