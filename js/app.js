

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
for (i = 0; i < images.length; i++) {

    itemDOMElements[currentIndex].classList.remove('active');
    itemDOMElements[currentIndex + 1].classList.add('active');
}
    console.log(itemDOMElements[currentIndex + 1]);
})


// arrowTop.addEventListener('click', function () {
//     console.log('funziona')

//     console.log(itemDOMElements[currentIndex]);
// })

