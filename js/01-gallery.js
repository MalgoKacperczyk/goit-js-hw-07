import { galleryItems } from "./gallery-items.js";
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
gallery.addEventListener("click", handleClick);
function openModal(imageUrl) {
  const instance = basicLightbox.create(`
    <img src="${imageUrl}">
  `);
  instance.show();

  document.addEventListener("keydown", handleKeyDown);

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", handleKeyDown);
    }
  }
}

console.log(galleryItems);
