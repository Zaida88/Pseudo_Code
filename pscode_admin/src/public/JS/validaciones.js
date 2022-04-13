function validacionUsuario(nombre,mensaje1) {
    let nombreVldr = /[A-Z]/
    if (nombreVldr.test(nombre)) {    
        mensaje1.style.display = "block"
    }
    else{
        mensaje1.style.display = "none"
    }
}