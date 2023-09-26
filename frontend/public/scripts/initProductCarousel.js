var swiperEl = document.querySelector('#productCarousel')
    Object.assign(swiperEl, {
      slidesPerView: 2,
      spaceBetween: 10,
      navigation: true,
      breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50
        }
      },
    });
    swiperEl.initialize();
    console.log(swiperEl)