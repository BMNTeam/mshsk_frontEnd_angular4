import {Component, OnInit} from '@angular/core';
import {routerTransition} from "../../../router.animations";
import {DataService} from "../../../data.service";


@Component({
    selector: 'app-perspective-page',
    templateUrl: './perspective-page.component.html',
    styleUrls: ['./perspective-page.component.scss'],
    animations: [routerTransition()]
})
export class PerspectivePageComponent implements OnInit {
    sliders = [];
   constructor( public dataService: DataService) {
       this.sliders = dataService.generateSpecialImageUsingMacFeatures('perspectives', 20)

   }

   ngOnInit() {
        console.dir(this.sliders);
   }
}
