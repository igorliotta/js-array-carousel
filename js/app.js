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


 let activeImage = document.querySelectorAll('.image')[0];
activeImage.classList.add('active');
console.log(activeImage);

btnDOMElement = document.getElementById('btnDown');
console.log(btnDOMElement);

//  document.querySelectorAll('.image')[0].classList.remove
btnDOMElement.addEventListener("click", function () {
    console.log('funziona');

    document.querySelectorAll('.image')[0].classList.remove('active');
    document.querySelectorAll('.image')[1].classList.add('active');
    activeImage++
    
    document.querySelectorAll('.image')[1].classList.remove('active');
    document.querySelectorAll('.image')[2].classList.add('active');
    activeImage++

    document.querySelectorAll('.image')[2].classList.remove('active');
    document.querySelectorAll('.image')[3].classList.add('active');
    activeImage++

    document.querySelectorAll('.image')[3].classList.remove('active');
    document.querySelectorAll('.image')[4].classList.add('active');
    
  });

 