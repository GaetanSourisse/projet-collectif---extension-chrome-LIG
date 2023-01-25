//on attend que la page soit fully loadée pour faire des trucs
document.addEventListener('DOMContentLoaded', function (){  
    //on écoute le bouton pour créer l'objet
    document.querySelector('.toggle').addEventListener('click', onclick) 
    
    //on enregistre la  clé toggle avec une valeur false dans le local storage
    chrome.storage.local.set({toggle: false})
    
    function onclick(){
        //changement de la valeur de "toogle"
        //pour pouvoir écouter le changement dans appOn.js

        //on récupère la valeur de toggle et on lui asssigne une valeur true ou false
        chrome.storage.local.get(["toggle"]).then((result) => {
            console.log("le toggle est" + result.toggle);
        
            if (result.toggle == false){ 
                console.log("toggle if =" + result.toggle);
                chrome.storage.local.set({toggle: true})
                
            } else {
                console.log("toggle else = " + result.toggle);
                chrome.storage.local.set({toggle: false})
                

            }
        })
    }
        
});