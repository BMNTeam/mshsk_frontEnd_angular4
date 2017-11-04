import { Component, OnInit } from '@angular/core';
import { routerTransition} from "../../router.animations";
import {DataService} from "../../data.service";


@Component({
  selector: 'app-analyze-page',
  templateUrl: './analyze-page.component.html',
  styleUrls: ['./analyze-page.component.scss'],
    animations: [routerTransition()]
})
export class AnalyzePageComponent implements OnInit {
  user = {};

  constructor(private data: DataService) { }

  ngOnInit() {
    this.user = this.data.userData;
  }
  showUser () {
    console.dir(this.data.userData);
  }

}
