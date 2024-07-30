import{i as c,S as p}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function m({hits:a}){if(a.length===0){onSearchError();return}return a.map(({webformatURL:r,largeImageURL:s,tags:o,likes:e,views:t,comments:i,downloads:u})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${s}">
     <img
      class="gallery-image"
      src="${r}"
      alt="${o}"
    />
  </a>
  <ul class="galery-attribute-list">
    <li class="attribute-item">
          <p class="attribute">Likes</p>
          <p class="attribute-value">${e}</p>
        </li>
        <li class="attribute-item">
          <p class="attribute">Views</p>
          <p class="attribute-value">${t}</p>
        </li>
        <li class="attribute-item">
          <p class="attribute">Comments</p>
          <p class="attribute-value">${i}</p>
        </li>
        <li class="attribute-item">
          <p class="attribute">Downloads</p>
          <p class="attribute-value">${u}</p>
        </li>
        </ul>
</li>`).join("")}function y(a){const r="https://pixabay.com/api/",s="45092252-8f5dca745258e9b30d446a442",o=new URLSearchParams({key:s,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${r}?${o}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const n=document.querySelector(".gallery"),f=document.querySelector(".js-search-form"),l=document.querySelector(".loader");l.style.display="none";f.addEventListener("submit",d);function d(a){a.preventDefault();const r=a.currentTarget,s=r.elements.query.value.trim().toLowerCase();if(s===""){n.innerHTML="",c.error({message:"Please enter a search query."});return}l.style.display="block",y(s).then(o=>{const e=m(o);n.innerHTML=e,h.refresh()}).catch(g).finally(()=>{l.style.display="none",r.reset()})}function g(a){c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML="",l.style.display="none"}let h=new p(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});c.settings({class:"izi-toast",position:"topRight",backgroundColor:"rgba(239, 64, 64, 1)",progressBarColor:"rgba(181, 27, 27, 1)",theme:"dark"});
//# sourceMappingURL=commonHelpers.js.map
