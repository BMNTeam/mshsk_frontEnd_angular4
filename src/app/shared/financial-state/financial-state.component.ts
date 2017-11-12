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
  @Input() stateName;
  statusClass: string;
  constructor(private sanitization: DomSanitizer) { }

  ngOnInit() {
      this.getFinancialState();
  }

  sanitizeProgress() {
    return this.sanitization.bypassSecurityTrustStyle(this.progress);
  }

  getFinancialState() {
    if (this.progress <= 25) {
      this.statusClass = 'bg-danger'
    } else if (this.progress > 25 && this.progress <= 50 ) {
      this.statusClass = 'bg-warning'
    } else if (this.progress > 50 && this.progress <= 75 ) {
      this.statusClass = 'bg-info';
    } else {
      this.statusClass = 'bg-success'
    }
  }
}
