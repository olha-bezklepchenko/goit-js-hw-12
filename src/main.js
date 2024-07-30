//імпорт бібліотек і необхідних функцій
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createGalleryMarkup } from './js/render-functions.js';
import { searchImages } from './js/pixabay-api.js';

//отримуємо доступ до форми пошуку, галереї і індикатора загрузки.
const gallery = document.querySelector('.gallery');
const searchForm = document.querySelector('.js-search-form');
const loader = document.querySelector('.loader');

loader.style.display = 'none'; //до сабміту форми індикатору загрузки немає

searchForm.addEventListener('submit', handleSearch); //прослуховуємо форму на подію сабміту

//колбек-функція сабміту форми
function handleSearch(event) {
  event.preventDefault();
  //отримуємо результат вводу
  const form = event.currentTarget;
  const queryValue = form.elements.query.value.trim().toLowerCase();

  //перевірка на пустий рядок
  if (queryValue === '') {
    gallery.innerHTML = '';
    iziToast.error({
      message: 'Please enter a search query.',
    });
    return;
  }

  loader.style.display = 'block'; // Показуємо індикатор завантаження

  searchImages(queryValue) // робимо запит на пошук
    .then(data => {
      const markup = createGalleryMarkup(data);
      gallery.innerHTML = markup; // наповненюємо галерею
      lightbox.refresh(); // Оновлюємо SimpleLightbox після вставки нових елементів
    })
    .catch(onSearchError) // оброблюємо помилку якщо фото не знайдено

    //  При будь-якому результаті приховуємо індикатор завантаження і очищуємо форму
    .finally(() => {
      loader.style.display = 'none';
      form.reset();
    });
}

//функція для обробки помилки
function onSearchError(error) {
  iziToast.error({
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });
  gallery.innerHTML = ''; //очищуємо розмітку галереї
  loader.style.display = 'none'; // Приховуємо індикатор завантаження у випадку помилки
}

//Ініціалізація бібліотеки SimpleLightbox
let lightbox = new SimpleLightbox('.gallery .gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

//налаштування для iziToast повідомлень
iziToast.settings({
  class: 'izi-toast',
  position: 'topRight',
  backgroundColor: 'rgba(239, 64, 64, 1)',
  progressBarColor: 'rgba(181, 27, 27, 1)',
  theme: 'dark',
});
