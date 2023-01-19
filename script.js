console.log("prout");
let loupe = document.createElement('div');
loupe.setAttribute('id','loupe');
document.body.appendChild(loupe);
console.log("pi");
let zoom = 1
document.body.onmousemove = function(){
    loupe.style.left = event.clientX + "px";
    loupe.style.top = event.clientY + "px";
    loupe.style.backgroundSize = (1000 * zoom) + "px";
    loupe.style.backgroundPosition = ((-loupe.offsetLeft * zoom) - 150) + "px " + ((-loupe.offsetTop * zoom)-150) + "px ";
}


let extensionActive = false;
let toggle = document.querySelector(".toggle");
console.log(toggle);

toggle.addEventListener("click", () => {
    console.log("je suis bien là");
    if(extensionActive == false){
        console.log("extension activée");
        extensionActive = true;
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.body.style.fontSize = "xx-large";

        
    } else {
        console.log("extension fermée");
        loupe.style.display = "none";
        extensionActive = false;

    }
})