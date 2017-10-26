document.getElementById("left").onclick = sliderLeft;
document.getElementById("right").onclick = sliderRight;
autoSlide();
var res=0;
var timer;
function autoSlide() {
    timer=setTimeout(sliderRight,2000);
}
function sliderLeft() {
    var polosa=document.getElementById('polosa');
    res=res+512;
    /*alert(res);*/
    if(res>=512){
        res=-4608;
    }
    polosa.style.left=res+'px';
}

function sliderRight() {
    var polosa=document.getElementById('polosa');

    res=res-512;
    if(res<-4608){
        res=0;
    }
    polosa.style.left=res+'px';
    autoSlide();
}