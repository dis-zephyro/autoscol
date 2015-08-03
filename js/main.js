/* Форма отправки внизу страницы

$('.form-request-start .btn').click(function(event){
    event.preventDefault();
    $('.form-request-start').hide();
    $('.form-request-success').show();
});

$('.form-request-success .btn').click(function(){
    $('.form-request-success').hide();
    $('.form-request-start').show();
});
 */

/* Action Slider */

$('.action-slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

/* Portfolio Slider */

$('.portfolio-slider').slick({
    arrows: false,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1
});

$('.prev').click(function(){
    $('.portfolio-slider').slick('slickPrev');
});

$('.next').click(function(){
    $('.portfolio-slider').slick('slickNext');
});


/* Category Tabs */

$('.cat-tabs').tabs();


$.validate({
    form : '.form-request-body'
});



// Подключние Яндекс-Карты

ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
        center: [55.7461,37.8825],
        zoom: 13,
        controls: ['zoomControl']
    });

    myMap.geoObjects
        .add(new ymaps.Placemark([55.7461,37.8825], {
            balloonContent: 'Москва, мкр. Новокосино, Салтыковская улица, 53'
        }, {
            iconLayout: 'default#image'
        }))

    myMap.behaviors.disable('scrollZoom');
}
