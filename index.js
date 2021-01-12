// const logo = document.querySelectorAll("#logo path");

// for(let i = 0; i < logo.length; i++){
//     console.log(`letter ${i} is at ${logo[i].getTotalLength()}`);
// }

import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

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







