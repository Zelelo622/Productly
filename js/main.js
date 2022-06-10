$(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true
    });

    $('.menu__burger').on('click', function(){
        $('.menu__list').toggleClass('menu__list--actives')
    });
});
