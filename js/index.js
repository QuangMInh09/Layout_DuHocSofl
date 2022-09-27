
$(document).ready(function () {
    $("#header-search-button-mb").click(function (e) {
        $(".header-search").toggle('slow');
    });

    /* menu responsive*/
    $('.menu-open').click(function () {
        $('.menu-responsive, .menu-responsive-overlay').toggleClass('show-mn');
    });
    $('.menu-close, .menu-responsive-overlay').click(function () {
        $('.menu-responsive, .menu-responsive-overlay').toggleClass('show-mn');
    });
    $('.menu-responsive .menu-item-has-children > a').after('<span class="sub-open"></span>');
    $('.menu-responsive .sub-open').click(function () {
        $(this).closest('li').children('.sub-menu').toggle(600);
        $(this).toggleClass('sub-opend');
    });

    Fancybox.bind("[data-fancybox]", {
        // Your options go here
    });

    let optionTop = {
        // parameters
        slidesPerView: 5,
        speed: 600,
        loop: true,
        centeredSlides: true,
        spaceBetween: 7.5,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 0
            0: {
                slidesPerView: 1,
            },

            // when window width is >= 992px
            992: {
                slidesPerView: 5,
            }
        },
        // navigation
        navigation: {
            nextEl: '.swiper-top-next',
            prevEl: '.swiper-top-prev',
        },
    }
    const swiper_top = initSwiperTab('#swiper_top', optionTop);


    let optionFlag = {
        // parameters
        slidesPerView: 3,
        speed: 600,
        loop: true,
        centeredSlides: true,
        spaceBetween: 7.5,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 0
            0: {
                slidesPerView: 1,
            },

            // when window width is >= 992px
            992: {
                slidesPerView: 3,
            }
        },
        // navigation
        navigation: {
            nextEl: '.swiper-flag-next',
            prevEl: '.swiper-flag-prev',
        },
    }
    const swiper_flag = initSwiperTab('#swiper_flag', optionFlag);

    screenW = $(document).innerWidth();
    screenH = $(document).innerHeight();

    if (screenH >= screenH && screenW <= 991) {
        let tabActiveid = $(".container-equip .tab-pane.active")[0].id;
        let idSwiper = "#swiper_tab_" + tabActiveid;
        let optionSWiper = {
            // parameters
            slidesPerView: 1,
            speed: 600,
            loop: true,
            spaceBetween: 7.5,
            // Responsive breakpoints           
            // navigation
            navigation: {
                nextEl: `.swiper-${tabActiveid}-next`,
                prevEl: `.swiper-${tabActiveid}-prev`,
            },
        }
        initSwiperTab(idSwiper, optionSWiper);

        $("#pills-tab-equip .nav-link").click(function (e) {
            let tabActiveid = $(this).attr("aria-controls");
            let idSwiper = "#wiper_tab_" + tabActiveid;
            let optionSWiper = {
                // parameters
                slidesPerView: 1,
                speed: 600,
                loop: true,
                spaceBetween: 7.5,
                // Responsive breakpoints           
                // navigation
                navigation: {
                    nextEl: `.swiper-${tabActiveid}-next`,
                    prevEl: `.swiper-${tabActiveid}-prev`,
                },
            }
            initSwiperTab(idSwiper, optionSWiper);
        });
    }
    let tabActiveid = $(".container-partner .tab-pane.active")[0].id;
    let idSwiper = "#swiper_" + tabActiveid;
    let optionSWiper = {
        // parameters
        slidesPerView: 4,
        speed: 600,
        loop: true,
        spaceBetween: 25,
        // Responsive breakpoints    
        breakpoints: {
            // when window width is >= 0
            0: {
                slidesPerView: 1,
            },
            // when window width is >= 768px
            769: {
                slidesPerView: 2,
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 4,
            }
        },
        // navigation
        navigation: {
            nextEl: `.swiper-${tabActiveid}-next`,
            prevEl: `.swiper-${tabActiveid}-prev`,
        },
    }
    initSwiperTab(idSwiper, optionSWiper);


    $(".container-partner .nav-link").click(function (e) {
        let tabActiveid = $(this).attr("aria-controls");
        let idSwiper = "#swiper_" + tabActiveid;
        let optionSWiper = {
            // parameters
            slidesPerView: 4,
            speed: 600,
            loop: true,
            spaceBetween: 25,
            // Responsive breakpoints    
            breakpoints: {
                // when window width is >= 0
                0: {
                    slidesPerView: 1,
                },
                // when window width is >= 768px
                769: {
                    slidesPerView: 2,
                },
                // when window width is >= 992px
                992: {
                    slidesPerView: 4,
                }
            },
            // navigation
            navigation: {
                nextEl: `.swiper-${tabActiveid}-next`,
                prevEl: `.swiper-${tabActiveid}-prev`,
            },
        }
        initSwiperTab(idSwiper, optionSWiper);
    });

    let optionGaleryThumb = {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
       
    }
    let SwiperGaleryThumb = initSwiperTab("#swiper-companion-thumb", optionGaleryThumb);
    let optionGalery = {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-companion-next",
            prevEl: ".swiper-companion-prev",
        },
        thumbs: {
            swiper: SwiperGaleryThumb,
        },
    }
    let SwiperGalery = initSwiperTab("#swiper-companion", optionGalery);

    let optionSWiperReview = {
        // parameters
        slidesPerView: 1,
        speed: 600,       
        spaceBetween: 7.5,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
    }
    initSwiperTab("#swiper_review",optionSWiperReview)
});

$(window).resize(function () {
    screenW = $(document).innerWidth();
    screenH = $(document).innerHeight();

    if (screenH >= screenH && screenW <= 991) {
        let tabActiveid = $(".tab-pane.active")[0].id;
        let idSwiper = "#swiper_tab_" + tabActiveid;
        let optionSWiper = {
            // parameters
            slidesPerView: 1,
            speed: 600,
            loop: true,
            spaceBetween: 7.5,
            // Responsive breakpoints           
            // navigation
            navigation: {
                nextEl: `.swiper-${tabActiveid}-next`,
                prevEl: `.swiper-${tabActiveid}-prev`,
            },
        }
        initSwiperTab(idSwiper, optionSWiper);
    }
})

function initSwiperTab(idSwiper, option) {
    const swiper = new Swiper(idSwiper, option);
    return swiper;
}