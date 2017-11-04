import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth.service";
import {DataService} from "../../data.service";


@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss']
})
export class RentComponent implements OnInit {
  user = {};
  constructor(private data: DataService) { }

  ngOnInit() {
    console.dir(localStorage.getItem('userData'));
    console.dir(this.user);
    if (localStorage.getItem('userData') !== null) {
        this.user = JSON.parse(localStorage.getItem('userData'));
    }
  }
  save() {
    console.dir(this.user);
    localStorage.setItem('userData', JSON.stringify(this.user));
    this.data.userData = this.user;
  }

}
