import galleryItems from "../app.js";
console.log(galleryItems);
const galleryItemList = document.querySelector('.js-gallery');
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

