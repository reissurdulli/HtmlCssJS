var slide = document.getElementsByClassName("slide");
var slideIndex = 0;

function showSlide(i){
    slideIndex = (i + slide.length)%slide.length;

    for(let s of slide)s.style.display = "none";
    slide[slideIndex].style.display = "block";
}

showSlide(0);

setInterval(()=> showSlide(slideIndex+1), 500)