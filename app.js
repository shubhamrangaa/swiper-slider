var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    
    
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,

      },

    breakpoints: {
    500: {
        slidesPerView: 2,
        spaceBetween: 0,
    },
    770: {
        slidesPerView: 3,
        spaceBetween: 0,
    },
    1030: {
        slidesPerView: 4,
        spaceBetween: 0,
    },
    1270: {
        slidesPerView: 5,
        spaceBetween: 0,
    },
    },
   
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  })