var u = 0;
var p = 0;
var e = 0;
var n = 0;

function validarUsuario(nombre, mensaje1) {
  let regex = /[^A-Za-z0-9]/;
  if (regex.test(nombre)) {
    mensaje1.style.display = "block";
    u = 0;
  } else {
    mensaje1.style.display = "none";
    u = 1;
  }
}

function validarPass(password, mensaje2) {
  let pass = new RegExp(
    "^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$",
    "g"
  );
  if (pass.test(password)) {
    mensaje2.style.display = "none";
    p = 1;
  } else {
    mensaje2.style.display = "block";
    p = 0;
  }
}

function validarName(nombre, mensaje4) {
  let name = /^[A-Za-z ]+$/;
  if (name.test(nombre.value)) {
    mensaje4.style.display = "none";
    n = 1;
    const arr = nombre.value.split(" ");

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const nombre2 = arr.join(" ");
    nombre.value = nombre2;
  } else {
    mensaje4.style.display = "block";
    n = 0;
  }
}

function validarCorreo(correo, mensaje4) {
  let email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (email.test(correo)) {
    mensaje4.style.display = "none";
    e = 1;
  } else {
    mensaje4.style.display = "block";
    e = 0;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("registro")
    .addEventListener("submit", validarFormulario);
});

function validarFormulario(evento) {
  evento.preventDefault();
  if (u == 1 && p == 1 && e == 1 && n == 1) {
    this.submit();
  } else {
    alert("Todos los campos tienen que estar validados");
  }
}
