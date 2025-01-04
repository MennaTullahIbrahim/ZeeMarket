/* swiper slide for side-bar*/

var swiper = new Swiper(".slide-swp ", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullests: true,
      clickable: true
    },
    autoplay:{
      delay:2500,  
    },
    loop:true,
  });

  /* swiper slide for sale-slide*/

var swiper = new Swiper(".sale_sec ", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullests: true,
      clickable: true
    },
    slidesPerView: 5,
    spaceBetween:30,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    breakpoints:{
        0:{
            slidesPerView:1,
            spaceBetween:10,
        },
        576:{
            slidesPerView:2,
            spaceBetween:15,
        },
        768:{
            slidesPerView:3,
            spaceBetween:20,
        },
        992:{
            slidesPerView:4,
            spaceBetween:25,
        },
        1200:{
            slidesPerView:5,
            spaceBetween:30,
        }
    }
  });
