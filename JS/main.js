const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    speed: 600,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // 可加上自動播放
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: { slidesPerView: 3 },
        576: { slidesPerView: 4 },
        768: { slidesPerView: 5 },
        992: { slidesPerView: 6 },
        1200: { slidesPerView: 6 },
        1500: { slidesPerView: 7 }
    }
});
const container = document.getElementById('movie-container');
document.getElementById('left-arrow').onclick = () => {
    container.scrollLeft -= 300; // 每次滑動一個卡片寬度
};
document.getElementById('right-arrow').onclick = () => {
    container.scrollLeft += 300;
};



