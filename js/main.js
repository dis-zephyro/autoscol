/* Форма отправки внизу страницы */

$('.form-request-start .btn').click(function(event){
    event.preventDefault();
    $('.form-request-start').hide();
    $('.form-request-success').show();
});

$('.form-request-success .btn').click(function(){
    $('.form-request-success').hide();
    $('.form-request-start').show();
});


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

/* Галерея работ */

jQuery(document).ready(function($){
    //check if the .cd-image-container is in the viewport
    //if yes, animate it
    checkPosition($('.result-image'));
    $(window).on('scroll', function(){
        checkPosition($('.result-image'));
    });

    //make the .cd-handle element draggable and modify .cd-resize-img width according to its position
    $('.result-image').each(function(){
        var actual = $(this);
        drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual, actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-image-label[data-type="modified"]'));
    });

    //upadate images label visibility
    $(window).on('resize', function(){
        $('.cd-image-container').each(function(){
            var actual = $(this);
            updateLabel(actual.find('.cd-image-label[data-type="modified"]'), actual.find('.cd-resize-img'), 'left');
            updateLabel(actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-resize-img'), 'right');
        });
    });
});

function checkPosition(container) {
    container.each(function(){
        var actualContainer = $(this);
        if( $(window).scrollTop() + $(window).height()*0.5 > actualContainer.offset().top) {
            actualContainer.addClass('is-visible');
        }
    });
}

//draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
    dragElement.on("mousedown vmousedown", function(e) {
        dragElement.addClass('draggable');
        resizeElement.addClass('resizable');

        var dragWidth = dragElement.outerWidth(),
            xPosition = dragElement.offset().left + dragWidth - e.pageX,
            containerOffset = container.offset().left,
            containerWidth = container.outerWidth(),
            minLeft = containerOffset + 10,
            maxLeft = containerOffset + containerWidth - dragWidth - 10;

        dragElement.parents().on("mousemove vmousemove", function(e) {
            leftValue = e.pageX + xPosition - dragWidth;

            //constrain the draggable element to move inside his container
            if(leftValue < minLeft ) {
                leftValue = minLeft;
            } else if ( leftValue > maxLeft) {
                leftValue = maxLeft;
            }

            widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';

            $('.draggable').css('left', widthValue).on("mouseup vmouseup", function() {
                $(this).removeClass('draggable');
                resizeElement.removeClass('resizable');
            });

            $('.resizable').css('width', widthValue);

            updateLabel(labelResizeElement, resizeElement, 'left');
            updateLabel(labelContainer, resizeElement, 'right');

        }).on("mouseup vmouseup", function(e){
            dragElement.removeClass('draggable');
            resizeElement.removeClass('resizable');
        });
        e.preventDefault();
    }).on("mouseup vmouseup", function(e) {
        dragElement.removeClass('draggable');
        resizeElement.removeClass('resizable');
    });
}

function updateLabel(label, resizeElement, position) {
    if(position == 'left') {
        ( label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
    } else {
        ( label.offset().left > resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
    }
}