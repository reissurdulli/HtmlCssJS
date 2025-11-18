// $(window).ready(function() {
//     alert("Jquery is working");
// });

$('#header').css('color', 'blue');
$('li');
$('ul li');
$('.student');

$('a.test:first');
$('tr:odd');
$('#myForm :input');
$('div:visible');
$('div:gt(2)');
$('div:animated0');

$('btn1').click(function() {
    console.log($('#h1').text());
    $('#h1').text('Hello jQuery');
    $('#h1').append('<h2>Appended text</h2>');
});
