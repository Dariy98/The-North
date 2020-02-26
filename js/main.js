var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    updateOnWindowResize: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.b-next',
      prevEl: '.b-prev',
    },
    breakpoints: {
      520: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      782: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
        centeredSlides: false,
      },
    }
  });
var swiper2 = new Swiper('.swiper-container-2', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    updateOnWindowResize: true,
    pagination: {
      el: '.swiper-pagination-2',
      clickable: true,
    },
    navigation: {
      nextEl: '.next-2',
      prevEl: '.prev-2',
    },
    breakpoints: {
      645: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1060: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1310: {
        slidesPerView: 4,
        spaceBetween: 10,
        centeredSlides: true,
      },
    }
  });




