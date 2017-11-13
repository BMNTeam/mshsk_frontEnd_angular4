import {Component, OnInit} from '@angular/core';
import {routerTransition} from "../../../router.animations";
import {DataService} from "../../../data.service";


@Component({
    selector: 'app-models-page',
    templateUrl: './models-page.component.html',
    styleUrls: ['./models-page.component.scss'],
    animations: [routerTransition()]
})
export class ModelsPageComponent implements OnInit {
    sliders = [];
   constructor( public dataService: DataService) {
       this.sliders = dataService.generateSpecialImageUsingMacFeatures('models', 34)

   }

   ngOnInit() {
        console.dir(this.sliders);
   }

}
