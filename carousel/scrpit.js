const slides = document.getElementsByClassName("carousel-item")
let slidePosition = 0;
const totalSlides = slides.length

const carsoulNxt = document.getElementById("carousel-button-next")
const carsoulPre = document.getElementById("carousel-button-prev")
carsoulNxt.addEventListener('click',moveToNextSlide)
carsoulPre.addEventListener('click',moveToPrevSlide)

function moveToNextSlide(){
    hideAllSlides()
    if(slidePosition==totalSlides-1){
        slidePosition = 0
    } else{
        slidePosition++
    }
    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide(){
    hideAllSlides()
    if(slidePosition==0){
        slidePosition = 2
    }
    else {
        slidePosition--
    }
    slides[slidePosition].classList.add("carousel-item-visible");
}

function hideAllSlides(){
    for( elemnt of slides){
        
        elemnt.classList.add('carousel-item-hidden')
        elemnt.classList.remove('carousel-item-visible')
    }
    }
