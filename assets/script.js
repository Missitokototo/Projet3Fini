const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    },

]

const slidesContainer = document.getElementById("banner");
const dotsContainer = document.getElementById("dots");

let i;
for (i = 0; i < slides.length; i++) {
    let slide = document.createElement("img");
    slide.id = "slide" + (i + 1);
    slide.classList.add("banner-img");
    slide.src = "./assets/images/slideshow/" + slides[i]["image"];
    slidesContainer.appendChild(slide);

    let dot = document.createElement("div");
    dot.id = "dot" + (i + 1);
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);

}

const rightArrow = document.getElementById("right-arrow");
rightArrow.addEventListener("click", function () {
  
    currentSlide = currentSlide + 1;

 
    if (currentSlide > slides.length) {
        currentSlide = 1;
    }

   
    display(currentSlide);
});

const leftArrow = document.getElementById("left-arrow");
leftArrow.addEventListener("click", function () {

    currentSlide = currentSlide - 1;

   
    if (currentSlide < 1) {
        currentSlide = slides.length;
    }


    display(currentSlide);
});

var currentSlide = 1;
display(currentSlide);




function display(slideIndex) {

    document.getElementById("tagline").innerHTML = slides[slideIndex - 1].tagLine;

    for (i = 0; i < slides.length; i++) {

        let slide = document.getElementById("slide" + (i + 1));
        if (slideIndex == i + 1) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }

        let dot = document.getElementById("dot" + (i + 1));
        if (slideIndex == i + 1) {
            dot.className = "dot dot_selected";
        } else {
            dot.className = "dot";
        }
    }
}




