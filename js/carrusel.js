function jerseylocal(){
        document.querySelector(".uniforme_visita").style.display = "none";
        document.querySelector(".uniforme_alternativo").style.display = "none";
        document.querySelector(".uniforme_local").style.display = "block";
}
function jerseyvisita(){
        document.querySelector(".uniforme_visita").style.display = "flex";
        document.querySelector(".uniforme_local").style.display = "none";
        document.querySelector(".uniforme_alternativo").style.display = "none";
}
function jerseyalternativo(){
        document.querySelector(".uniforme_visita").style.display = "none";
        document.querySelector(".uniforme_alternativo").style.display = "flex";
        document.querySelector(".uniforme_local").style.display = "none";
}
function jerseyroot(){
        document.querySelector(".uniforme_visita").style.display = "none";
        document.querySelector(".uniforme_alternativo").style.display = "none";
        document.querySelector(".uniforme_local").style.display = "flex";
}


