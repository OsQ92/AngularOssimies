import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { NgxGalleryImage } from 'ngx-gallery'
import { GALLERYOPTIONS } from '../images';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private images: NgxGalleryImage[];
  private galleryoptions = GALLERYOPTIONS;

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
    this.imageService.getImages().subscribe(test => this.images = test);
  }
}
