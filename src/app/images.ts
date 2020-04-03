import { NgxGalleryImage, NgxGalleryOptions, NgxGalleryAnimation } from 'ngx-gallery';
export const UNRAIDIMAGES: NgxGalleryImage[] =
[
    {
      small: '../assets/images/image1-thumb.jpg',
      medium: '../assets/images/image1-small.jpg',
      big: '../assets/images/image1.jpg',
      description: "This is a description."
    },
    {
      small: '../assets/images/image2-thumb.png',
      medium: '../assets/images/image2-small.png',
      big: '../assets/images/image2.png',
      description: "This is a description."
    }
]

export const EDUCATIONIMAGES: NgxGalleryImage[] =
[
    {
      small: '../assets/images/image1-thumb.jpg',
      medium: '../assets/images/image1-small.jpg',
      big: '../assets/images/image1.jpg',
      description: "This is a description."
    },
    {
      small: '../assets/images/image2-thumb.png',
      medium: '../assets/images/image2-small.png',
      big: '../assets/images/image2.png',
      description: "This is a description."
    }
]

export const GALLERYOPTIONS: NgxGalleryOptions[] =
[
  {
    //breakpoint:1440,
    width: '100%',
    height: '400px',
    thumbnailsColumns: 4,
    imageAutoPlay: true,
    imageAutoPlayInterval: 30000,
    imageAutoPlayPauseOnHover: true,
    imageAnimation: NgxGalleryAnimation.Fade,
    thumbnails: false,
    imageArrows: true,
    previewArrowsAutoHide: true,
    imageArrowsAutoHide: true,
    imageDescription: true,
    previewCloseOnClick: true,
    previewCloseOnEsc: true,
    previewKeyboardNavigation: true,
    previewFullscreen: true,
    previewZoom: true,
    imagePercent: 100,
    arrowPrevIcon: "fa fa-caret-left",
    arrowNextIcon: "fa fa-caret-right",
    closeIcon: "fa fa-times-circle",
    fullscreenIcon: "fa fa-tv"
  }
]
