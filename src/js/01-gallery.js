import { galleryItems } from "./gallery-items.js";

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
           data-source="${original}"
           alt="${description}"
        />
  </a>
</li>`;
    })
    .join("");
}

function onPalettContainerClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
      <img src="${e.target.dataset.source}" width="800" height="600">
  `);

  instance.show();
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}

////=====================
{
  /* <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img class="gallery__image" src="small-image.jpg" alt="Image description" />
  </a>
</li>;
//................
<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li>; */
}
