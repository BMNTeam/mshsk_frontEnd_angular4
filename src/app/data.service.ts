import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  userData = {};

  constructor() { }

  generateDataToAnalyze () {
    console.dir('123');
  }

}
