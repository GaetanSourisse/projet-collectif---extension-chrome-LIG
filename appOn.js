document.body.style.filter = "invert(1) hue-rotate(180deg)"
document.body.style.fontSize = "xx-large"
let media = document.querySelectorAll("img, picture, video")
media.forEach((mediaItem) =>{
    mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
})
console.log("prout");
let loupe = document.createElement('div');
loupe.setAttribute('id','loupe');
document.body.appendChild(loupe);
console.log("pi");

loupe.style.width = "100px"
loupe.style.height = "100px"
loupe.style.borderRadius = "60px"
loupe.style.border = "solid 3px rgb(212, 8, 42)"
loupe.style.position = "absolute"


let zoom = 1
document.body.onmousemove = function(){
    loupe.style.left = event.clientX + "px";
    loupe.style.top = event.clientY + "px";
    loupe.style.backgroundSize = (1000 * zoom) + "px";
    loupe.style.backgroundPosition = ((-loupe.offsetLeft * zoom) - 150) + "px " + ((-loupe.offsetTop * zoom)-150) + "px ";
}