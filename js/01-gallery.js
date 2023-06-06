import { galleryItems } from "./gallery-items.js";
import * as basicLightbox from "../node_modules/basiclightbox/dist/basicLightbox.min.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryItem = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </div>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryItem);

function handleClick(event) {
  event.preventDefault();
  if (event.target.classList.contains("gallery__image")) {
    const largeImage = event.target.getAttribute("data-source");
    openModal(largeImage);
  }
}

function openModal(imageUrl) {
  const instance = basicLightbox.create(`
    <img src="${imageUrl}">
  `);
  instance.show();
}

gallery.addEventListener("click", handleClick);

console.log(galleryItems);
