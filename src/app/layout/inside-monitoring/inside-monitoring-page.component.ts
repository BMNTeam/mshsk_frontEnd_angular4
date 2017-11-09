import {Component, OnInit} from '@angular/core';
import {routerTransition} from "../../router.animations";
import {DataService} from "../../data.service";


@Component({
    selector: 'app-inside-monitoring-page',
    templateUrl: './inside-monitoring-page.component.html',
    styleUrls: ['./inside-monitoring-page.component.scss'],
    animations: [routerTransition()]
})
export class InsideMonitoringPageComponent implements OnInit {
   constructor() {}

   ngOnInit() {

   }

}
