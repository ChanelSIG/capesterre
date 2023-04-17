// Récupération des données de JSON
const reponse=await fetch('scene3D_ZMGVH.json');
const scene = await reponse.json();
// Création des balises 
const commune = scene[0];
const partElement = document.createElement("h2");
partElement.innerText = commune.part;
const modelpageElement = document.createElement("img");
modelpageElement.src = commune.modelpage;
const lasceneElement = document.createElement("object");
lasceneElement.src = commune.scene;
// Rattacher les balises au DOM
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(partElement);
sectionFiches.appendChild(modelpageElement);
sectionFiches.appendChild(lasceneElement);
