console.log('Ciao')

const galleryDOMElement = document.querySelector('.gallery');
console.log(galleryDOMElement);

const images = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp'];

 console.log(images);   

 for (let i = 0; i < images.length; i++) {
    // console.log(i);

    const currentSrc = images[i];
    console.log(currentSrc);

    const htmlString = `
    <div class="image-wrapper">
       <img class="image" src="${currentSrc}">
    </div>
    `

    console.log(htmlString);
    galleryDOMElement.innerHTML += htmlString;
    
 }

 const imageDOMElements = document.querySelectorAll('.image');
 console.log(imageDOMElements);
 

