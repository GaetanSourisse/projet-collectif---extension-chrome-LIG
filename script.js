let loupe = document.createElement('div');
loupe.setAttribute('id','loupe');
document.body.appendChild(loupe);

let zoom = 1
document.body.onmousemove = function(){
    loupe.style.left = event.clientX + "px";
    loupe.style.top = event.clientY + "px";
    loupe.style.backgroundSize = (1000 * zoom) + "px";
    loupe.style.backgroundPosition = ((-loupe.offsetLeft * zoom) - 150) + "px " + ((-loupe.offsetTop * zoom)-150) + "px ";
}