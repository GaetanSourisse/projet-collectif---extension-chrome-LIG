//on écoute le changement du storage déclenché par le bouton de la popup
chrome.storage.local.onChanged.addListener(() => {
    //puis on lance le changement de contraste et la loupe.
    chrome.storage.local.get({
        status: objVerif = {
          value: true
        }
      })
    if (objVerif.value == true){
        console.log("ça marche")
        contrast();
        createLoupe();
        chrome.storage.local.set({
            status: objVerif = {
              value: false
            }
          })
    }
    
   else (objVerif.value == false);{
        contrast();
        deleteLoupe();

    }
})



function contrast (){
    // creer le contraste de la page web. modifiaction du css via js.

    document.body.style.filter = "invert(1) hue-rotate(180deg)"
    document.body.style.fontSize = "xx-large"
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
}


// css de la loupe
loupe.style.width = "100px"
loupe.style.height = "100px"
loupe.style.borderRadius = "60px"
loupe.style.border = "solid 3px rgb(212, 8, 42)"
loupe.style.position = "fixed"
loupe.style.left= "-100%"
loupe.style.top= "50%"
loupe.style.transition = "all 300ms ease-out"
loupe.style.transform= "translateX(-90%) translateY(-90%)"
loupe.style.pointerEvents = "none"
document.body.style.Cursor = "none"



// zoom et mouvement de la loupe
let zoom = 1
document.body.addEventListener("mousemove", function(e){
    loupe.style.left = e.clientX + "px";
    loupe.style.top = e.clientY + "px";
    loupe.style.backgroundSize = (1000 * zoom) + "px";
    loupe.style.backgroundPosition = ((-loupe.offsetLeft * zoom) - 150) + "px " + ((-loupe.offsetTop * zoom) - 150) + "px ";
});


// fonction pour que la loupe suit la souris
document.onmousemove = suitsouris;

function suitsouris(evenement) {
  if (navigator.appName == "Microsoft Internet Explorer") {
    var x = event.x + document.body.scrollLeft;
    var y = event.y + document.body.scrollTop;
  } else {
    var x = evenement.pageX;
    var y = evenement.pageY;
  }
  document.getElementById("loupe").style.left = (x + 1) + 'px';
  document.getElementById("loupe").style.top = (y + 1) + 'px';
}
