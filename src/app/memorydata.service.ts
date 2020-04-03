import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'


@Injectable({
  providedIn: 'root'
})
export class MemorydataService implements InMemoryDbService {

  constructor() { }

  createDb() {

    let images = [
      {
        small: '../assets/images/image1-thumb.jpg',
        medium: '../assets/images/image1-small.jpg',
        big: '../assets/images/image1.jpg',
        description: "This is a description."
      }
    ];

    let test = [
      {
        small: '../assets/images/image1-thumb.jpg',
        medium: '../assets/images/image1-small.jpg',
        big: '../assets/images/image1.jpg',
        description: "This is a description."
      }
    ];
    return {images, test};
  }
}
