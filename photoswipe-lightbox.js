import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe/dist/photoswipe-lightbox.esm.js';

const lightbox = new PhotoSwipeLightbox({
    gallery: '#my-gallery--responsive-images',
    children: 'a',
    pswpModule: () => import('https://unpkg.com/photoswipe'),
});

lightbox.init();