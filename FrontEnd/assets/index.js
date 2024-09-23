const reponse = await fetch('http://localhost:5678/api/works');
const works = await reponse.json();
console.log(works);

/* works.forEach((work) => {
    createHTML();
}); */

for (let i = 0; i < works.length; i++) {
    /*  console.log(works[i].title); */
    createHTML(works[i]);
}

function createHTML(work) {
    console.log(work.title);
    let figure = document.createElement('figure');
    let figureImg = document.createElement('img');
    figureImg.src = 'assets/images/abajour-tahina.png';
    figureImg.alt = 'Abajour Tahina';

    let figureFigcaption = document.createElement('figcaption');
    figureFigcaption.innerText = work.title;

    figure.appendChild(figureImg);
    figure.appendChild(figureFigcaption);

    let gallery = document.querySelector('.gallery');
    gallery.appendChild(figure);
}
