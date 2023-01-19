let extensionActive = false;
let toggle = document.querySelector(".toggle");
console.log(toggle);




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