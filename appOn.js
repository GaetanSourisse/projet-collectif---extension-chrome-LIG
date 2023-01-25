//on écoute le changement du storage déclenché par le bouton de la popup
chrome.storage.onChanged.addListener(() => {
    chrome.storage.local.get(["toggle"]).then ((result) => {
        console.log(result.toggle)
        if (result.toggle == true){
            console.log("ça marche")
            contrast();
            createLoupe();
            suitsouris(evenement);
        } else {
            console.log("ça marche aussi");
            noContrast();
            deleteLoupe();
        }
    })
})


function noContrast(){
    document.body.style.filter = "invert(0) hue-rotate(180deg)"
    //document.body.style.fontSize = "medium"
    let media = document.querySelectorAll("img, picture, video")
    media.forEach((mediaItem) =>{
    mediaItem.style.filter = "invert(0) hue-rotate(180deg)"
    })
}    
      
function contrast (){
    // creer le contraste de la page web. modifiaction du css via js.

    document.body.style.filter = "invert(1) hue-rotate(180deg)"
    //document.body.style.fontSize = "xx-large"
    let media = document.querySelectorAll("img, picture, video")
    media.forEach((mediaItem) =>{
    mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
    })
}

function createLoupe (){
    // creation de la loupe
    let loupe = document.createElement('div');
    loupe.setAttribute('id','loupe');
    document.body.appendChild(loupe);

    chrome.storage.local.get(["image"]).then ((result) =>{
        // css de la loupe
        loupe.style.width = "200px"
        loupe.style.height = "200px"
        loupe.style.borderRadius = "110px"
        loupe.style.border = "solid 3px rgb(212, 8, 42)"
        loupe.style.background = "url("+result.image+")"
        loupe.style.position = "absolute"
        loupe.style.transform= "translateX(-90%) translateY(-90%)"
        
    })
}
    
// fonction pour que la loupe suive la souris
document.onmousemove = suitsouris;
function suitsouris(evenement) {
    var x = evenement.pageX;
    var y = evenement.pageY;
    let zoom = 3        
    document.getElementById("loupe").style.left = (x + 1) + 'px';
    document.getElementById("loupe").style.top = (y + 1) + 'px';
    document.getElementById("loupe").style.backgroundSize = (1680 * zoom) + "px";
    document.getElementById("loupe").style.backgroundPosition = (-(document.getElementById("loupe").offsetLeft) * zoom) + "px " + (-(document.getElementById("loupe").offsetTop) * zoom) + "px ";
}
    
function deleteLoupe (){
    document.getElementById("loupe").remove()
}



