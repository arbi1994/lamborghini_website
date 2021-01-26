// const logo = document.querySelectorAll("#logo path");

// for(let i = 0; i < logo.length; i++){
//     console.log(`letter ${i} is at ${logo[i].getTotalLength()}`);
// }

import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

/* hero section slideshow */

const mySwiper = new Swiper('.swiper-container', {
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
    delay: 6000,
    waitForTransition: true
    },
    preloadImages: false,
    lazy: {
        loadPrevNext: true
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
});


/* Popup window */

const checkLink = document.querySelectorAll(".description-window h2 a");
const popup = document.querySelector(".popup");

checkLink.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    popupWindow(popup);
  });
});

popup.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;
 
  if(x >= 1295 || x <= 1365 && y >= 115 || y <= 28){
    pupupWindowClose(popup);
  }
})

function popupWindow(window){
  window.classList.add("active");
}

function pupupWindowClose(window){
  window.classList.remove("active");
}
