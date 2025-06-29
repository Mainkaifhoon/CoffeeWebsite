const menuOpenButton= document.querySelector('#menu-open-button');
menuOpenButton.addEventListener('click',()=>{

    document.body.classList.toggle('show-mobile-menu');
})
const menuCloseButton= document.querySelector('#menu-close-button');
menuCloseButton.addEventListener('click',()=> menuOpenButton.click())


// Initialize Swiper

const swiper = new Swiper('.slider-wrapper', {
 
  loop: true,
    spaceBetween:25,
    grabCursor:true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // responsive breakpoint
  breakpoints:{
    0:{
        slidesPerView:1
    },
    768:{
        slidesPerView:2
    },
    1024:{
        slidesPerView:3
    },
  }

});