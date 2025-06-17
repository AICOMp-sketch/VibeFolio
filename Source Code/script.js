AOS.init();

    new Typed('#typed-text', {
      strings: ["a Developer.", "a Designer.", "a Problem Solver."],
      typeSpeed: 70,
      backSpeed: 50,
      loop: true
    });

    const swiperOptions = {
      loop: true,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    };

    new Swiper(".mySwiperSkills", swiperOptions);
    new Swiper(".mySwiperCerts", swiperOptions);
    new Swiper(".mySwiperProjects", swiperOptions);