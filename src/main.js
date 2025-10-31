import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



import { getImagesByQuery } from './js/pixabay-api.js';
import { renderGallery, showLoader, hideLoader, clearGallery } from './js/render-functions.js';
const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');



form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const query = event.currentTarget.elements["search-text"].value.trim();
    
    if (!query) {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search query!',
        });
        return;
    }
    
    // Очищаємо галерею через інкапсульовану функцію
    clearGallery();
    showLoader(); 
    
    getImagesByQuery(query)
        .then(data => {
            if (data.hits.length === 0) {
                    return iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });     
            } else { 
                renderGallery(data.hits);
               
            }
        })
        .catch(error => console.log(error))
        .finally(() => {
            hideLoader(); 
        });
}