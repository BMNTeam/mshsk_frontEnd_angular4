import {Component, OnInit} from '@angular/core';
import {routerTransition} from "../../router.animations";
import {DataService} from "../../data.service";


@Component({
    selector: 'app-improvements-page',
    templateUrl: './improvements-page.component.html',
    styleUrls: ['./improvements-page.component.scss'],
    animations: [routerTransition()]
})
export class ImprovementsPageComponent implements OnInit {
    sliders = [];
   constructor( public dataService: DataService) {
       this.sliders = dataService.generateImagesForSlider('improvements', 15)

   }

   ngOnInit() {
        console.dir(this.sliders);
   }

}
