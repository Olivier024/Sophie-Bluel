const reponse = await fetch('http://localhost:5678/api/works');
const works = await reponse.json();
console.log(works);

for (let i = 0; i < works.length; i++) {
createHTML(works[i]);
}

function createHTML(work) {
   console.log(work);
  let figure = document.createElement('figure');
  let figureImg = document.createElement('img');
   figureImg.src = work.imageUrl;
  figureImg.alt = work.category.name;

 let figureFigcaption = document.createElement('figcaption');
  figureFigcaption.innerText = work.title;



 figure.appendChild(figureImg);
  figure.appendChild(figureFigcaption);

 let gallery = document.querySelector('.gallery');
   gallery.appendChild(figure);
}