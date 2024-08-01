//імпорт бібліотек і необхідних функцій
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createGalleryMarkup } from './js/render-functions.js';
import { searchImages } from './js/pixabay-api.js';

//отримуємо доступ до форми пошуку, галереї, індикатора загрузки і кнопки підгрузки.
const gallery = document.querySelector('.gallery');
const searchForm = document.querySelector('.js-search-form');
const loader = document.querySelector('.loader');
const btnLoadMore = document.querySelector('.js-load-btn');

let currentPage = 1;
let query = ''; //змінна для збереження результату пошуку

btnLoadMore.style.display = 'none'; //спочатку кнопки підгрузки немає
loader.style.display = 'none'; //до сабміту форми індикатору загрузки немає

searchForm.addEventListener('submit', handleSearch); //прослуховуємо форму на подію сабміту

//колбек-функція сабміту форми
async function handleSearch(event) {
  event.preventDefault();
  const form = event.currentTarget;
  query = form.elements.query.value.trim().toLowerCase();

  //перевірка на пустий рядок
  if (query === '') {
    gallery.innerHTML = '';
    iziToast.error({
      message: 'Please enter a search query.',
    });
    return;
  }

  loader.style.display = 'block'; // Показуємо індикатор завантаження
  gallery.innerHTML = '';
  currentPage = 1;

  try {
    const data = await searchImages(query, currentPage); // робимо запит на пошук
    const markup = createGalleryMarkup(data);
    gallery.innerHTML = markup; // наповненюємо галерею
    lightbox.refresh(); // Оновлюємо SimpleLightbox після вставки нових елементів

    if (data.hits.length > 0) {
      btnLoadMore.style.display = 'block'; // Показуємо кнопку "Load more"
    } else {
      btnLoadMore.style.display = 'none'; // Сховати кнопку, якщо зображення не знайдені
    }
  } catch (error) {
    // оброблюємо помилку якщо фото не знайдено
    onSearchError(error);
  } finally {
    //  При будь-якому результаті приховуємо індикатор завантаження і очищуємо форму
    loader.style.display = 'none';
    form.reset();
  }
}

btnLoadMore.addEventListener('click', async () => {
  // прослуховуємо подію кліку на кнопці підгрузки
  currentPage += 1;
  loader.style.display = 'block';

  try {
    const data = await searchImages(query, currentPage);
    const markup = createGalleryMarkup(data);
    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();

    scrollPage(); // Виклик функції прокручування

    const totalHits = data.totalHits;
    const totalPages = Math.ceil(totalHits / 15);

    if (currentPage > totalPages) {
      btnLoadMore.style.display = 'none';
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        backgroundColor: 'rgba(0, 153, 255, 1)',
        progressBarColor: 'rgba(0, 113, 189, 1)',
      });
    }
  } catch (error) {
    onSearchError(error);
  } finally {
    loader.style.display = 'none';
  }
});

//функція для обробки помилки
function onSearchError(error) {
  iziToast.error({
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    backgroundColor: 'rgba(239, 64, 64, 1)',
    progressBarColor: 'rgba(181, 27, 27, 1)',
  });
  gallery.innerHTML = ''; //очищуємо розмітку галереї
  loader.style.display = 'none'; // Приховуємо індикатор завантаження у випадку помилки
}

// Функція для плавного прокручування сторінки
function scrollPage() {
  const cardHeight = document
    .querySelector('.gallery-item')
    .getBoundingClientRect().height;

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
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
  theme: 'dark',
});
