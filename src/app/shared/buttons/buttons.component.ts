import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  print() {
    window.print();
  }

  save() {
    const form = document.querySelector('form');
    const event = new Event('submit');
    form.dispatchEvent(event);
  }

}
