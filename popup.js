//on attend que la page soit fully loadée pour faire des trucs
document.addEventListener('DOMContentLoaded', function (){  
    //on écoute le bouton pour créer l'objet

    document.querySelector('.toggle').addEventListener('click', onclick) 
    chrome.storage.local.set({toggle: false})
    
          
    
    function onclick(){
        //changement de la valeur de "toogle"
        //pour pouvoir écouter le changement dans le script.js
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