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

arrowLeft.addEventListener("click", function () {
    console.log("Clic sur la flèche gauche");
    // Le code pour passer à la diapositive précédente
});

arrowRight.addEventListener("click", function () {
    console.log("Clic sur la flèche droite");
    // Le code pour passer à la diapositive suivante
});

// Etapes 3 : Ajoutez des bullet points au slider
const dotsContainer = document.querySelector(".dots");

// Création des bullet pointse fonction du nombre d'images dans le tableau slides
for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
}

// Surbrillance du premier point
const dots = document.querySelectorAll(".dot");
dots[0].classList.add("dot_selected");
