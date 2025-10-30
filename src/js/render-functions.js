import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
let gallery_box = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    enableKeyboard: true,
    showCounter: true,
    scrollZoom: true,
    loop: true,
    overlayOpacity: 0.9,
    animationSpeed: 250
});

function createGallery(images) {
    return images.map(
        ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => 
            `<li class="gallery__item">
                <a class="gallery__link" href="${largeImageURL}">
                    <img class="gallery__image" src="${webformatURL}" alt="${tags}" />
                    <div class="info">
                        <p><b>Likes:</b> ${likes}</p>
                        <p><b>Views:</b> ${views}</p>
                        <p><b>Comments:</b> ${comments}</p>
                        <p><b>Downloads:</b> ${downloads}</p>
                    </div>
                </a>
            </li>`)
    .join("");
}

function renderGallery(images) {
    const galleryContainer = document.querySelector('.gallery');
    galleryContainer.innerHTML = createGallery(images);
    // Оновлюємо SimpleLightbox після додавання нових зображень
    gallery_box.refresh();
}

export { createGallery, renderGallery };