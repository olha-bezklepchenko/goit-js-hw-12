import{a as p,i as d,S as L}from"./assets/vendor-c493984e.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function g({hits:t}){if(t.length===0){onSearchError();return}return t.map(({webformatURL:a,largeImageURL:s,tags:o,likes:e,views:r,comments:i,downloads:b})=>`
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
          <p class="attribute-value">${e}</p>
        </li>
        <li class="attribute-item">
          <p class="attribute">Views</p>
          <p class="attribute-value">${r}</p>
        </li>
        <li class="attribute-item">
          <p class="attribute">Comments</p>
          <p class="attribute-value">${i}</p>
        </li>
        <li class="attribute-item">
          <p class="attribute">Downloads</p>
          <p class="attribute-value">${b}</p>
        </li>
        </ul>
</li>`).join("")}p.defaults.baseURL="https://pixabay.com/api/";async function m(t,a){const s="45092252-8f5dca745258e9b30d446a442",o=new URLSearchParams({key:s,per_page:15,page:a,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"});try{return(await p.get(`?${o}`)).data}catch{throw new Error("Failed to fetch images")}}const n=document.querySelector(".gallery"),w=document.querySelector(".js-search-form"),l=document.querySelector(".loader"),u=document.querySelector(".js-load-btn");let c=1,y="";u.style.display="none";l.style.display="none";w.addEventListener("submit",S);async function S(t){t.preventDefault();const a=t.currentTarget;if(y=a.elements.query.value.trim().toLowerCase(),y===""){n.innerHTML="",d.error({message:"Please enter a search query."});return}l.style.display="block",n.innerHTML="",c=1;try{const s=await m(y,c),o=g(s);n.innerHTML=o,h.refresh(),s.hits.length>0?u.style.display="block":u.style.display="none"}catch{f()}finally{l.style.display="none",a.reset()}}u.addEventListener("click",async()=>{c+=1,l.style.display="block";try{const t=await m(y,c),a=g(t);n.insertAdjacentHTML("beforeend",a),h.refresh(),P();const s=t.totalHits,o=Math.ceil(s/15);c>o&&(u.style.display="none",d.info({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"rgba(0, 153, 255, 1)",progressBarColor:"rgba(0, 113, 189, 1)"}))}catch{f()}finally{l.style.display="none"}});function f(t){d.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"rgba(239, 64, 64, 1)",progressBarColor:"rgba(181, 27, 27, 1)"}),n.innerHTML="",l.style.display="none"}function P(){const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}let h=new L(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});d.settings({class:"izi-toast",position:"topRight",theme:"dark"});
//# sourceMappingURL=commonHelpers.js.map
