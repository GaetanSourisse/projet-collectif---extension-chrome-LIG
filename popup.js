//on attend que la page soit fully loadée pour faire des trucs
document.addEventListener('DOMContentLoaded', function (){  
    //on écoute le bouton pour créer l'objet

    document.querySelector('.toggle').addEventListener('click', onclick, false) 
    
    function onclick(){
        //au click du bouton, on créé l'objet dans le storage 
        //pour pouvoir écouter le changement dans le script.js
        chrome.storage.local.set({
            status: objVerif = {
              value: true
            }
          })
    };

}, false);

// activation et désactivation de l'extension via le toggle.

/*let toggle = document.querySelector(".toggle");
console.log(toggle);

let extensionActive = false;

toggle.addEventListener("click", () => {
    console.log("je suis bien là");
    if(extensionActive == false){
        console.log("extension activée");
        
        extensionActive = true
        
    } else {
        console.log("extension fermée");
        loupe.style.display = "none";
        extensionActive = false;

    }
})*/