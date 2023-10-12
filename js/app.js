

console.log('ciao')

const images = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp',
];

const carouselDOMElement = document.querySelector('.carousel');
console.log(carouselDOMElement, images);

for (let i = 0; i < images.length; i++) {
    console.log(images[i]);
    const src = images[i];

    const html = `<img class="carousel__item" src="${src}" alt=""></img>`;

    carouselDOMElement.innerHTML += html;
    // console.log(carouselDOMElement);
}

const itemDOMElements = document.querySelectorAll('.carousel__item');
console.log(itemDOMElements);

let currentIndex = 0;

let activeImage = itemDOMElements[currentIndex];
activeImage.classList.add('active')

const arrowTop = document.querySelector('.carousel .arrow-top');
const arrowDown = document.querySelector('.carousel .arrow-down');
console.log(arrowTop, arrowDown);

arrowDown.addEventListener('click', function () {
    console.log('funziona')


   const activeSlideElement = itemDOMElements[currentIndex];
   activeSlideElement.classList.remove('active');

   if (currentIndex === itemDOMElements.length - 1) {
    currentIndex = 0;
   } else {
    currentIndex++;
   }

   const nextSlideElement = itemDOMElements[currentIndex];
   nextSlideElement.classList.add('active');

    
})


arrowTop.addEventListener('click', function () {
    console.log('funziona')

const activeSlideElement = itemDOMElements[currentIndex];
activeSlideElement.classList.remove('active');

if (currentIndex === 0) {
    currentIndex = itemDOMElements.length - 1;
    } else {
    currentIndex--;
    }
    
    const nextSlideElement = itemDOMElements[currentIndex];
    nextSlideElement.classList.add('active');
})

