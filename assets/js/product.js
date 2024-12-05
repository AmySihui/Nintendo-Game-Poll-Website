// carousel
document.addEventListener("DOMContentLoaded", function () {
    var carouselElement = document.querySelector("#carouselCaptions");

    var carousel = new bootstrap.Carousel(carouselElement, {
        interval: 2000, // 自动播放间隔时间（单位：毫秒）
        ride: "carousel", // 自动播放
        pause: "hover"   // 鼠标悬停时暂停
    });
});
