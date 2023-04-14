import { galleryItems } from "./gallery-items.js";
// Change code below this line
const palettContainer = document.querySelector(".gallery");
const cardsImg = createGalleryImgMarkup(galleryItems);

palettContainer.insertAdjacentHTML("beforeend", cardsImg);
palettContainer.addEventListener("click", onPalettContainerClick);

function createGalleryImgMarkup(gallery) {
  return gallery
    .map(({ description, original, preview }) => {
      return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
           class="gallery__image"
           src="${preview}"
           alt="${description}"
           title="${description}"
           
        />
  </a>
</li>`;
    })
    .join("");
}
// captionDelay = "250"
function onPalettContainerClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  var lightbox = new SimpleLightbox(".gallery a", {
    /* options */ captionDelay: "250",
  });
}
