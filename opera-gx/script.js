var Sun = document.getElementById("sun");
var Mercury = document.getElementById("mercury");
var Star = document.getElementById("star");
var Venus = document.getElementById("venus");
var Comet = document.getElementById("comet");
var Earth = document.getElementById("earth");
var Moon = document.getElementById("moon");
var Mars = document.getElementById("mars");
var Jupiter = document.getElementById("jupiter");
var Saturn = document.getElementById("saturn");
var Uranus = document.getElementById("uranus");
var Neptune = document.getElementById("neptune");
var button = document.getElementById("sound");
var msc = document.getElementById("audio");
var modalsun = document.getElementById("dialogsun")
var btnclosesun = document.getElementById("btnclosesun");
var modalmerc = document.getElementById("dialogmerc")
var btnclosemerc = document.getElementById("btnclosemerc");
var modalstar = document.getElementById("dialogstar")
var btnclosestar = document.getElementById("btnclosestar");
var modalven = document.getElementById("dialogven")
var btncloseven = document.getElementById("btncloseven");
var modalcom = document.getElementById("dialogcom")
var btnclosecom = document.getElementById("btnclosecom");
var modalear = document.getElementById("dialogear")
var btnclosear = document.getElementById("btnclosear");
var modalmoo = document.getElementById("dialogmoo")
var btnclosemoo = document.getElementById("btnclosemoo");
var modalmar = document.getElementById("dialogmar")
var btnclosemar = document.getElementById("btnclosemar");
var modaljup = document.getElementById("dialogjup")
var btnclosejup = document.getElementById("btnclosejup");
var modalsat = document.getElementById("dialogsat")
var btnclosesat = document.getElementById("btnclosesat");
var modalura = document.getElementById("dialogura")
var btncloseura = document.getElementById("btncloseura");
var modalnep = document.getElementById("dialognep")
var btnclosenep = document.getElementById("btnclosenep");

// Audio //
button.onclick = function(){
    if(button.style.backgroundImage === 'url("img/sound.png")'){
        button.style.backgroundImage = 'url("img/mute.png")';
        msc.pause();
    }
    else{
        button.style.backgroundImage = 'url("img/sound.png")';
        msc.play();
        msc.volume = 0.4;
    }
}

// Planets Functions //
function sun(){
    modalsun.showModal();
}
function closesun(){
    modalsun.close();
}

function mercury(){
    modalmerc.showModal();
}
function closemerc(){
    modalmerc.close();
}

function star(){
    modalstar.showModal();
}
function closestar(){
    modalstar.close();
}

function venus(){
    modalven.showModal();
}
function closeven(){
    modalven.close();
}

function comet(){
    modalcom.showModal();
}
function closecom(){
    modalcom.close();
}

function earth(){
    modalear.showModal();
}
function closeear(){
    modalear.close();
}

function moon(){
    modalmoo.showModal();
}
function closemoo(){
    modalmoo.close();
}

function mars(){
    modalmar.showModal();
}
function closemar(){
    modalmar.close();
}

function jupiter(){
    modaljup.showModal();
}
function closejup(){
    modaljup.close();
}

function saturn(){
    modalsat.showModal();
}
function closesat(){
    modalsat.close();
}

function uranus(){
    modalura.showModal();
}
function closeura(){
    modalura.close();
}

function neptune(){
    modalnep.showModal();
}
function closenep(){
    modalnep.close();
}