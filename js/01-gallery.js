import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryNav = document.querySelector(".gallery");
const nav = document.querySelector('.gallery')

const  createGallery = galleryItems => {
  return galleryItems
      .map(({ preview, original, description }) => {
        
      return `<div class="gallery__item">
  <a class="gallery__link" >
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

const showModalImg = (e) => {
  const srcOriginal = e.target.dataset.source
  
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }


  const instance = basicLightbox.create(`
    <img src='${srcOriginal}' width="800" height="600">
`) 
instance.show()
}
nav.addEventListener('click', showModalImg)

const imageGallery = createGallery(galleryItems);
galleryNav.innerHTML = imageGallery;

