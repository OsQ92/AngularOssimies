//https://github.com/lukasz-galka/ngx-gallery
import { Component, OnInit, Input } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  @Input() inputImages: NgxGalleryImage[];
  @Input() inputOptions: NgxGalleryOptions[];

  constructor() { }

  ngOnInit() {
  }
}
