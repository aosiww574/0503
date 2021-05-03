var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    clickable: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    // pagination 的style

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // bulletClass: 'my-bullet',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// 滑鼠覆蓋停止自動切換
swiper.el.onmouseover = function () {
    swiper.autoplay.stop();
}

// 滑鼠離開開始自動切換
swiper.el.onmouseout = function () {
    swiper.autoplay.start();
}

// pagination 點選設定
for (i = 0; i < swiper.pagination.bullets.length; i++) {
    swiper.pagination.bullets[i].onmouseover = function () {
        this.click();
    };
}

(function (defaultFontSize, defaultScreenWidth) {
    var htmlNode = document.getElementsByTagName('html')[0];
    function resize() {
        var screenWidth = document.body.offsetWidth;
        var fontSize = (screenWidth / defaultScreenWidth) * defaultFontSize;
        // if (fontSize > 100) fontSize = 100;
        // if (fontSize > 100 && $(window).width() <= 750) fontSize = 100;
        if (fontSize > 100 && document.body.clientWidth <= 1200) fontSize = 100;
        if (document.body.clientWidth >= 1200 && document.body.clientWidth < 1440) fontSize = 145;
        if (document.body.clientWidth >= 1440 && document.body.clientWidth < 1600) fontSize = 160;
        if (document.body.clientWidth >= 1600) fontSize = 220;
        htmlNode.style.fontSize = fontSize + 'px';
    }
    document.addEventListener('DOMContentLoaded', function () {
        resize();
    });
    window.addEventListener('resize', resize);
})(100, 750);
