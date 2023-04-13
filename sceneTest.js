// Récupération des données de JSON
const reponse=await fetch('scene3D_ZMGVH.json');
const scene = await reponse.json();
function genererScene(scene){
    for (let i = 0; i < pices.lenght; i++) {
        const zone = scene[i];
        // Récupération de l'élément du DOM pour les zones
        const sectionFiches = document.querySelector(".fiches");
        // Création balise dédiée à une commune
        const communeElement  = document.createElement("commune");
        // Création balise dédiée à image emplacement 
        const partElement = document.createElement("h2");
        partElement.innerText= zone.part;
        // Balise de l'image model
        const modelpageElement = document.createElement("img");
        modelpageElement.src = zone.modelpage;
        // Balise de l'objet 3D
        const sceneElement = document.createElement("object");
        sceneElement.src=zone.scene
        //Rattacher les balises à la fiche
        sectionFiches.appendChild(communeElement);
        // Rattacher les élément de la commune 
        communeElement.appendChild(partElement);
        communeElement.appendChild(modelpageElement);
        communeElement.appendChild(sceneElement);
    }
}

genererScene(scene); // faire tourner la boucle

// Gestion des bouttons
const boutonPart1 = document.querySelector(".btn-part1");
boutonPart1.addEventListener("clik",function(){
    const part1 = scene.filter(function(scenes){
        return scenes.part = "Partie1"
    })
}
)