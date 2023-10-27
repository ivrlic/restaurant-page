(()=>{"use strict";const e={home:{content:()=>{const e=document.createElement("div");e.classList.add("cont"),e.classList.add("home-cont"),e.classList.add("tab-content-cont");const t=document.createElement("img");t.src="./img/chef1.jpg",t.style.width="80%",t.style.borderRadius="50%",t.style.borderBottom="2px solid #000";const n=document.createElement("p"),a=document.createElement("p");return n.textContent="Welcome to Evening Secret, where unforgettable dining experiences await.",a.textContent="Our chef's creations are sure to tantalize your taste buds.",e.appendChild(n),e.appendChild(t),e.appendChild(a),e}},menu:{content:()=>{const e=document.createElement("div");e.classList.add("tab-content-cont"),e.classList.add("menu-cont");const t=document.createElement("h2");t.textContent="Our Offer";const n=document.createElement("p");n.textContent="At Evening Secret, we pride ourselves on serving homemade dishes of exceptional quality and taste. Explore our menu and savor the flavors.";const a=document.createElement("div");return[{name:"Rice Ball",price:"9€",img:"./img/rice-ball.jpg"},{name:"Rice Pork",price:"11€",img:"./img/rice-pork.jpg"},{name:"Raw Beef",price:"13€",img:"./img/raw-beef.jpg"},{name:"Raw Fish",price:"9€",img:"./img/raw-fish.jpg"},{name:"Omelette",price:"8€",img:"./img/omelette.jpg"},{name:"Pizza",price:"10€",img:"./img/pizza.jpg"}].forEach((e=>{const t=document.createElement("div");t.classList.add("dish-div");const n=document.createElement("h3");n.textContent=e.name;const c=document.createElement("p");c.textContent=`Price: ${e.price}`;const d=document.createElement("img");d.src=e.img,d.alt=e.name,d.classList.add("dish-img"),t.appendChild(n),t.appendChild(c),t.appendChild(d),a.appendChild(t)})),e.appendChild(t),e.appendChild(n),e.appendChild(a),e}},contact:{content:()=>{const e=document.createElement("div");e.classList.add("tab-content-cont"),e.classList.add("contact-cont");const t=document.createElement("div"),n=document.createElement("div");n.innerHTML='\n          <span><strong>Chef Marcus</strong></span>\n          <i class="fa fa-address-book"></i>\n        ';const a=document.createElement("div");a.innerHTML='\n          <i class="fa fa-crosshairs"></i>\n          <span> Secret Alley 36, MoonStadt</span>  \n        ';const c=document.createElement("div");c.innerHTML='\n          <i class="fa fa-phone"></i>\n          <span> 00 989 11 22 33</span>  \n        ';const d=document.createElement("div");d.innerHTML='\n          <i class="fa fa-envelope"></i>\n          <span> \n            <a href="mailto:eveningsecret@gmail.com"> eveningsecret@gmail.com</a>\n          </span>\n        ',t.appendChild(n),t.appendChild(a),t.appendChild(c),t.appendChild(d);const i=document.createElement("button");return i.textContent="Send Inquiry",i.addEventListener("click",(()=>{i.classList.add("animate"),setTimeout((()=>{i.classList.remove("animate"),window.open("mailto:eveningsecret@gmail.com")}),500)})),e.appendChild(t),e.appendChild(i),e}}},t=document.createElement("main"),n=n=>{t.innerHTML="",t.appendChild(e[n].content())},a=()=>{const t=document.createElement("header"),a=document.createElement("div");a.classList.add("cont");const c=document.createElement("h1");c.textContent="Evening Secret",a.appendChild(c),t.appendChild(a);const d=document.createElement("nav");d.classList.add("tab-container");for(const t in e){const e=document.createElement("div");"home"===t&&e.classList.add("tab-chosen"),e.classList.add("tab"),e.textContent=t.charAt(0).toUpperCase()+t.slice(1),e.addEventListener("click",(a=>{for(let t=0;t<e.parentElement.children.length;t++){const n=e.parentElement.children[t];a.target.textContent===n.textContent?n.classList.add("tab-chosen"):n.classList.remove("tab-chosen")}n(t)})),d.appendChild(e)}return a.appendChild(d),t},c=()=>{const e=document.createElement("footer"),t=document.createElement("p");return t.textContent="Made by ivrlic",e.appendChild(t),e},d=document.getElementById("content");document.addEventListener("DOMContentLoaded",(()=>{d.appendChild(a()),d.append(t),d.appendChild(c()),n("home")}))})();