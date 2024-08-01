import{a as d,S as w,i as y}from"./assets/vendor-c493984e.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function g({hits:e}){if(e.length===0){onSearchError();return}return e.map(({webformatURL:a,largeImageURL:s,tags:o,likes:t,views:r,comments:l,downloads:L})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${s}">
     <img
      class="gallery-image"
      src="${a}"
      alt="${o}"
    />
  </a>
  <ul class="galery-attribute-list">
    <li class="attribute-item">
          <p class="attribute">Likes</p>
          <p class="attribute-value">${t}</p>
        </li>
        <li class="attribute-item">
          <p class="attribute">Views</p>
          <p class="attribute-value">${r}</p>
        </li>
        <li class="attribute-item">
          <p class="attribute">Comments</p>
          <p class="attribute-value">${l}</p>
        </li>
        <li class="attribute-item">
          <p class="attribute">Downloads</p>
          <p class="attribute-value">${L}</p>
        </li>
        </ul>
</li>`).join("")}d.defaults.baseURL="https://pixabay.com/api/";const m=15;async function f(e,a){const s="45092252-8f5dca745258e9b30d446a442",o=new URLSearchParams({key:s,per_page:m,page:a,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"});try{return(await d.get(`?${o}`)).data}catch{throw new Error("Failed to fetch images")}}const n=document.querySelector(".gallery"),S=document.querySelector(".js-search-form"),i=document.querySelector(".loader"),u=document.querySelector(".js-load-btn");let c=1,p="";u.style.display="none";i.style.display="none";S.addEventListener("submit",k);async function k(e){e.preventDefault();const a=e.currentTarget;if(p=a.elements.query.value.trim().toLowerCase(),p===""){n.innerHTML="",q("Please enter a search query.");return}i.style.display="block",n.innerHTML="",c=1;try{const s=await f(p,c),o=g(s);n.innerHTML=o,b.refresh(),s.hits.length>0?u.style.display="block":u.style.display="none"}catch{h()}finally{i.style.display="none",a.reset()}}u.addEventListener("click",async()=>{c+=1,i.style.display="block";try{const e=await f(p,c),a=g(e);n.insertAdjacentHTML("beforeend",a),b.refresh(),M();const s=e.totalHits,o=Math.ceil(s/m);c>=o&&(u.style.display="none",v("We're sorry, but you've reached the end of search results."))}catch{h()}finally{i.style.display="none"}});function h(e){P("Sorry, there are no images matching your search query. Please try again!"),n.innerHTML="",i.style.display="none"}function M(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}let b=new w(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});function P(e){y.error({class:"izi-toast",message:e,position:"topRight",theme:"dark",backgroundColor:"rgba(239, 64, 64, 1)",progressBarColor:"rgba(181, 27, 27, 1)"})}function q(e){y.warning({class:"izi-toast",message:e,position:"topRight",theme:"dark",backgroundColor:"rgba(255, 160, 0, 1)",progressBarColor:"rgba(187, 123, 16, 1)"})}function v(e){y.info({class:"izi-toast",message:e,position:"bottomRight",theme:"dark",backgroundColor:"rgba(0, 153, 255, 1)",progressBarColor:"rgba(0, 113, 189, 1)"})}
//# sourceMappingURL=commonHelpers.js.map
