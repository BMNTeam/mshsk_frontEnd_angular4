import {Component, Input, OnInit} from '@angular/core';
import {SafeStyle} from "@angular/platform-browser";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-financial-state',
  templateUrl: './financial-state.component.html',
  styleUrls: ['./financial-state.component.scss']
})
export class FinancialStateComponent implements OnInit {
  @Input() progress;
  constructor(private sanitization: DomSanitizer) { }

  ngOnInit() {
      //this.progress = this.sanitization.bypassSecurityTrustStyle('width: 100');
  }

}
