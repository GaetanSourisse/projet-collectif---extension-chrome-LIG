// activation et désactivation de l'extension via le toggle.

let toggle = document.querySelector(".toggle");
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
})