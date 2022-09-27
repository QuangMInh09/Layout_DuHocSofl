$(document).ready(function() {
    var stickyNavTop = $('.site-header').offset().top;

    var stickyNav = function(){
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
        $('.site-header').addClass('sticky-menu');
    } else {
        $('.site-header').removeClass('sticky-menu');
    }
    };

    stickyNav();

    $(window).scroll(function() {
      stickyNav();
    });
});
