export function searchImages(query) {
  const URL = 'https://pixabay.com/api/';
  const API_KEY = '45092252-8f5dca745258e9b30d446a442';
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
