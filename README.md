# Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

- Creiamo il markup statico:
   - Costruiamo il container e inseriamo un’immagine grande al centro.

- Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito:
  - Oscuriamo l'immagine grande che abbiamo inserito in precedenza come markup statico, lasciando solo il div gallery.
  - Creiamo e dichiariamo all'interno di una costate images l'array che conterrà le nostre immagini di riferimento, precedentemente fornite.
  - Facciamo console.log(images) per visualizzare in console se l'array che abbiamo creato è stato fatto in maniera corretta.

- Creiamo un semplice ciclo FOR che concatena un template literal.
  - Creiamo un ciclo FOR:
     - for (let i = 0; i < images.lenght; i++)
     - Dichiariamo una variabile currentSrc che sarà uguale alla corrispettiva immagine presente ad ogni valore di i dell'array.
     - A questo punto facciamo un console.log(currentSrc) per vedere cosa accade.
     - Notiamo che ad ogni indice del nostro array corrisponde la corrispettiva immagine presente nell'array.
  - Concateniamo un template literal al nostro div.gallery:
    - Dichiariamo una variabile htmlString.
    - htmlString = `<div class="image-wrapper"><img class="image" src="$(currentSrc)"></div>`
    - Facciamo console.log(htmlString) per vedere cosa accade.
    - Noteremo in console che è stato inserito, tramite template literal, all'interno del nostro div.gallery, un div contenente un tag img al cui interno a sua volta è stato inserita la variabile currentSrc dichiarato precedentemente.
