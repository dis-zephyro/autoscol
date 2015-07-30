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