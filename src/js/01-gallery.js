// Add imports above this line
import { galleryItems } from './gallery-items';
import simpleLightbox from 'simplelightbox';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line
const photoGallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
    const galleryHTML = 
    `<li>
        <a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
        </a>
    </li>`

    photoGallery.insertAdjacentHTML('beforeend', galleryHTML);
});

const lightbox = new simpleLightbox('.gallery a');


