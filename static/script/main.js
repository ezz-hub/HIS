box2 =document.getElementById("box2");
box3 =document.getElementById("box3");

window.onload =function(){
    setTimeout(function(){
        box2.style.visibility='visible';
        box2.classList.add("animate__zoomIn")
    },1000);
    setTimeout(function(){
        box3.style.visibility='visible';
        box3.classList.add("animate__zoomIn")
    },2000);
}