import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  userData = {};

  constructor() { }

  generateDataToAnalyze () {
    console.dir('123');
  }
  generateImagesForSlider(folderName: string, number: number) {
    const arrays = [];
    for (let i = 0; i <= number; i++) {
      let image;
      image = {
        imagePath: 'assets/images/' + folderName + '/' + i + '.jpg'
      };
      arrays.push(image) ;
    }
    return arrays;
  }

}
