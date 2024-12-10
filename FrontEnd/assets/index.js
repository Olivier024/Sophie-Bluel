const reponseWorks = await fetch('http://localhost:5678/api/works');
const works = await reponseWorks.json();
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

const buttonTous = document.createElement("button");
const containerBoutons = document.querySelector(".boutons");
buttonTous.innerText = "Tous";
containerBoutons.appendChild(buttonTous);

buttonTous.addEventListener("click", () => {
    console.log("Tous");
  });

const reponseCategories = await fetch('http://localhost:5678/api/categories');
const categories = await reponseCategories.json();
console.log(categories[0].name);

for (let i = 0; i < categories.length; i++) {
    let boutons = document.createElement("button")
    boutons.innerText = categories[i].name;
    const containerBoutons = document.querySelector('.boutons');
    containerBoutons.appendChild(boutons);
    boutons.addEventListener("click", () => {
    console.log(categories[i].name);
    });    
}