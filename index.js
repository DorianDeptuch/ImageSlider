const slideShowImages = document.querySelector('#slideShowImages');
const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArrow');
const images = document.querySelectorAll('.img'); 
const imagesArray = [...document.getElementsByClassName('img')];
const navButtons = document.querySelectorAll('.navButton');
const navButtonsArray = [...document.querySelectorAll('.navButton')];

let currentImage = 0;


//separate behaviors into individual functions
function toTheRight(){
  resetClasses();
  
  if (currentImage == imagesArray.length - 1){
    imagesArray[0].scrollIntoView();
    imagesArray[0].classList.remove('blur');
    navButtonsArray[0].classList.add('selectedNav');
    currentImage = 0;
  } else {
    imagesArray[(currentImage + 1)].classList.remove('blur');
    imagesArray[(currentImage + 1)].scrollIntoView();
    navButtonsArray[(currentImage + 1)].classList.add('selectedNav');

    ++currentImage;
  }
}

function toTheLeft(){
  resetClasses();

  if (currentImage == 0){
    imagesArray[6].scrollIntoView();
    imagesArray[6].classList.remove('blur');
    navButtonsArray[6].classList.add('selectedNav');
    currentImage = 6;
  } else {
    imagesArray[(currentImage - 1)].classList.remove('blur');
    imagesArray[(currentImage - 1)].scrollIntoView();
    navButtonsArray[(currentImage - 1)].classList.add('selectedNav');
    --currentImage;
  }
}

function resetClasses(){
  for(let j = 0; j < navButtons.length; j++){
    navButtons[j].classList.remove('selectedNav');
    images[j].classList.add('blur');
  }
}

function addNavFunctionality() {
  for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener('click', (e) => {
      let anchor = navButtons[i].parentNode.hash;
      currentImage = navButtonsArray.indexOf(e.target);
      if (!navButtons[i].classList.contains('selectedNav')) {
        resetClasses();
        navButtons[i].classList.add('selectedNav');
        document.querySelector(anchor).classList.remove('blur');
      } else {
        navButtons[i].classList.remove('selectedNav');

      }
    })
  }
}
addNavFunctionality();
rightArrow.onclick = toTheRight;
leftArrow.onclick = toTheLeft;
