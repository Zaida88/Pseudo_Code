function mostrarMenu(){
    console.log("Boton funcional");
    document.getElementById("nav-bar").style.display= "flex";
    document.getElementById("nav-bar").style.marginTop = "500px";
    document.getElementById("menu__boton").style.display= "none";
}
function cerrarMenu(){
    console.log("Boton funcional");
    document.getElementById("nav-bar").style.display= "none";
    document.getElementById("menu__boton").style.display= "flex";
}