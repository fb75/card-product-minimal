const cardContainer = document.querySelector(".card-text-container");
const cardFront = document.querySelector(".card-front");
const btn = document.querySelector(".btn-card-front");
const cardDescription = document.querySelector(".card-description");
const cardImage = document.querySelector(".card-image");
const closeCard = document.querySelector(".close-card");

let isOpen = false;
let isFullImage = false;

btn.addEventListener("click", (event) => {
  event.preventDefault;
  cardFront.style.opacity = 0;
  cardFront.style.transform = "translateY(100%)";
  cardContainer.style.width = "30em";
  isOpen = true;
  if (isOpen) {
    cardDescription.style.transform = "translate(0)";
    cardDescription.style.opacity = 1;
    cardImage.style.transform = "translateX(100%)";
    cardImage.style.opacity = 1;
    cardImage.style.width = "50%";
    cardImage.style.cursor = "zoom-in";
  }
});

closeCard.addEventListener("click", (event) => {
  event.stopPropagation();
  if (isOpen == true && isFullImage == false) {
    cardFront.style.opacity = 1;
    cardFront.style.transform = "translateY(0)";
    cardContainer.style.width = "15em";
    cardDescription.style.transform = "translate(-100%)";
    cardDescription.style.opacity = 0;
    cardImage.style.transform = "translateX(200%)";
    cardImage.style.width = "50%";
    cardImage.style.cursor = "zoom-in";
    cardImage.style.opacity = 0;
    isOpen = false;
  }

  if (isOpen == true && isFullImage == true) {
    cardFront.style.opacity = 1;
    cardFront.style.transform = "translateY(0)";
    cardContainer.style.width = "15em";
    cardDescription.style.transform = "translate(-100%)";
    cardDescription.style.opacity = 0;
    cardImage.style.transform = "translateX(200%)";
    cardImage.style.width = "50%";
    cardImage.style.backgroundSize = "100%";
    cardImage.style.cursor = "zoom-out";
    cardImage.style.opacity = 0;
    isOpen = false;
    isFullImage = false;
  }
});

cardImage.addEventListener("click", (event) => {
  event.stopPropagation();
  if (isOpen == true && isFullImage == false) {
    isFullImage = true;
    cardDescription.style.opacity = 0;
    cardDescription.style.transform = "translate(-100%)";
    cardImage.style.transform = "translateX(0)";
    cardImage.style.width = "100%";
    cardImage.style.backgroundSize = "150%";
    cardImage.style.backgroundPosition = "center";
    cardImage.style.cursor = "zoom-out";
  } else if (isOpen == true && isFullImage == true) {
    isFullImage = false;
    cardDescription.style.opacity = 1;
    cardDescription.style.transform = "translate(0)";
    cardImage.style.transform = "translateX(100%)";
    cardImage.style.width = "50%";
    cardImage.style.backgroundSize = "cover";
    cardImage.style.backgroundPosition = "center";
    cardImage.style.cursor = "zoom-in";
  }
});
