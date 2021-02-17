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

    if(link == checkLink[0]){
      previewUrl("https://en.wikipedia.org/wiki/Lamborghini_Murciélago", popup);
    }else if(link == checkLink[1]){
      previewUrl("https://en.wikipedia.org/wiki/Lamborghini_Gallardo", popup);
    }else if(link == checkLink[2]){
      previewUrl("https://en.wikipedia.org/wiki/Lamborghini_Aventador", popup);
    }else if(link == checkLink[3]){
      previewUrl("https://en.wikipedia.org/wiki/Lamborghini_Huracán", popup);
    }else if(link == checkLink[4]){
      previewUrl("https://www.hotcars.com/15-of-the-sickest-limited-edition-lamborghinis", popup);
    }else if(link == checkLink[5]){
      previewUrl("https://en.wikipedia.org/wiki/List_of_Lamborghini_concept_vehicles", popup);
    }else if(link == checkLink[6]){
      previewUrl("", popup);
    }
    
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

//function to redirect to an external web page 
function previewUrl(url,target){

  window.ht = setTimeout(function(){
      let div = document.querySelector('.popup')
      div.innerHTML = '<iframe width="100%" height="100%" frameborder="0" src="' + url + '" />';
  }, 1000);      
} 

//history page --- animation on scroll 
gsap.registerPlugin(ScrollTrigger);

const images = document.querySelectorAll("img")

function animationOnScroll(){
  images.forEach(image => {
    const tl = gsap.timeline({
    scrollTrigger: {
      trigger: image,
      start: "top 500px",
      end: "bottom top",
      //scrub: true,
      markers: false
    }
  })

    if(image.id == "first_img"){
      tl.to(image, {xPercent: -120, duration: 1})
    }else if(image.id == "second_img"){
      tl.to(image, {xPercent: 80, duration: 1})
    }else if(image.id == "third_img"){
      tl.to(image, {xPercent: -250, duration: 1})
    }

  })
}

animationOnScroll();



