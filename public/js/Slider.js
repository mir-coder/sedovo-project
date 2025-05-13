class SwiperSlider {
    constructor(selector, options) {
        this.swiper = new Swiper(selector, options);
    }
}

export class MySwiper extends SwiperSlider {
    constructor() {
        const options = {
            slidesPerView: 3,
            spaceBetween: 15,
            loop:true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            // autoplay: {
            //     delay: 5000,
            // },
            breakpoints: {
                320: { slidesPerView: 1 },
                480: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
            },
        };
        super(".mySwiper", options);
    }
}

export class MySwiperProduct extends SwiperSlider {
    constructor() {
        const options = {
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            keyboard: true,
        };
        super(".mySwiperProduct", options);
    }
}
