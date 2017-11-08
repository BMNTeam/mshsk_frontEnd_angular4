import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-c',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() heading: string;
  constructor() { }

  ngOnInit() {
  }

}
