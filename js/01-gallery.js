import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryNav = document.querySelector(".gallery");

const  createGallery = galleryItems => {
  return galleryItems
      .map(({ preview, original, description }) => {
        
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
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

const imageGallery = createGallery(galleryItems);
galleryNav.innerHTML = imageGallery;

// const  instance  =  basicLightbox . create ( ` 
// 	<h1>Динамічний вміст</h1> 
// 	<p>Ви можете встановити вміст лайтбоксу за допомогою JS.</p> 
// ` )
// instance.show()