const slides = [
    {
        image: "slide1.jpg",
        tagLine:
            "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
        image: "slide2.jpg",
        tagLine:
            "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
        image: "slide3.jpg",
        tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
        image: "slide4.png",
        tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
];

// Etapes 2 :  Ajoutez des Event Listeners sur les flèches
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// Etapes 3 : Ajoutez des bullet points au slider
const dotsContainer = document.querySelector(".dots");

// Création des bullet points en fonction du nombre d'images dans le tableau slides
for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
}

// Surbrillance du premier point
const dots = document.querySelectorAll(".dot");
dots[0].classList.add("dot_selected");

// Etapes 4 + 5 : Ajoutez des bullet points au slider + défilement infini
let currentSlideIndex = 0; // Variable pour suivre l'index de la diapositive actuelle

function updateSlide(index) {
    // Mise à jour de l'image
    const bannerImage = document.getElementById("banner1");
    bannerImage.src = `../assets/images/slideshow/${slides[index].image}`;

    // Mise à jour du text
    const tagLine = document
        .getElementById("banner")
        .getElementsByTagName("p")[0];
    tagLine.innerHTML = slides[index].tagLine;

    // Mettre à jour le point actif
    dots.forEach((dot) => dot.classList.remove("dot_selected"));
    dots[index].classList.add("dot_selected");
}

arrowLeft.addEventListener("click", function () {
    //étape 3
    console.log("Clic sur la flèche gauche");
    if (currentSlideIndex > 0) {
        currentSlideIndex = currentSlideIndex - 1;
        updateSlide(currentSlideIndex);
    }
    // Etape 5
    else {
        // Sinon : passer à la dernière page
        currentSlideIndex = slides.length - 1;
    }
    updateSlide(currentSlideIndex);
});

arrowRight.addEventListener("click", function () {
    //étape 3
    console.log("Clic sur la flèche droite");
    if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex = currentSlideIndex + 1;
    }
    // Etape 5
    else {
        // Sinon, passez à la première page
        currentSlideIndex = 0;
    }
    updateSlide(currentSlideIndex);
});
