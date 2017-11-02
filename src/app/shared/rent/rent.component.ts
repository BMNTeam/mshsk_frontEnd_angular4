import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss']
})
export class RentComponent implements OnInit {
  user = {};
  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userData'));
  }
  save() {
    localStorage.setItem('userData', JSON.stringify(this.user))
  }

}
