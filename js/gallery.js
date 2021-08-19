import galleryItems from "../app.js";

const galleryItemList = document.querySelector('.js-gallery');
const modalEl = document.querySelector('.js-lightbox');
const modalCloseBtnEl = document.querySelector('[data-action="close-lightbox"]');
const imageOrigin = document.querySelector('.lightbox__image');
const backdropEl = document.querySelector('.lightbox__overlay');

const galleryListMarkup = createGalleryItemsMarkup(galleryItems);
galleryItemList.insertAdjacentHTML('afterbegin', galleryListMarkup);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(
        ({ preview, original, description }) => {
            return `<li class = gallary-item>
            <a
            class="gallery__link"
            href="${original}"
            >
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
            </li>`
        }
    ).join('');
}


galleryItemList.addEventListener('click', onOpenModal);
modalCloseBtnEl.addEventListener('click', onCloseModal);
backdropEl.addEventListener('click', onCloseModal);
window.addEventListener('keyup', onCloseModal);

function onOpenModal(event) {
    event.preventDefault();
    console.log(event.target.nodeName);
    if (event.target.nodeName !== "IMG") {
        return;
    }
    modalEl.classList.add('is-open');
    imageOrigin.setAttribute('src', event.target.dataset.source);
    imageOrigin.setAttribute('alt', event.target.alt);
    
    console.log("Открытие модального окна");

}

function onCloseModal(event) {
  if (event.target===event.currentTarget || event.key === "Escape"){
    modalEl.classList.remove('is-open');
    imageOrigin.removeAttribute('src');
    imageOrigin.removeAttribute('alt');
  }
}