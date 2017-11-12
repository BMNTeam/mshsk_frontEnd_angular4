import {Component, OnInit} from '@angular/core';
import {routerTransition} from "../../../router.animations";
import {DataService} from "../../../data.service";


@Component({
    selector: 'app-preparations-page',
    templateUrl: './preparations-page.component.html',
    styleUrls: ['./preparations-page.component.scss'],
    animations: [routerTransition()]
})
export class PreparationsPageComponent implements OnInit {
    sliders = [];
   constructor( public dataService: DataService) {
       this.sliders = dataService.generateSpecialImageUsingMacFeatures('preparations', 24)

   }

   ngOnInit() {
        console.dir(this.sliders);
   }

}
