import "photoswipe/style.css";
import pswpModule from "photoswipe";
import PhotoSwipeLightbox from "photoswipe/lightbox";

const lightbox = new PhotoSwipeLightbox({
  gallery: "#gallery--products",
  children: "a",
  pswpModule: pswpModule,
});

lightbox.init();
