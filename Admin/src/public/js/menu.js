
var selec = null;
function on_suim(e){
event.preventDefault(); 
var form_data = read_data();
if(selec == null){
 ingreso_data(form_data);
}
}

function read_data(){
    var for_data = {}
    for_data["name"] = document.getElementById("number").value;
    for_data["code"] = document.getElementById("name").value;
    return for_data;

}
function ingreso_data(data){
var table = document.getElementById("tabla").getElementsByTagName("tbody")[0];
var new_tabla = table.insertRow(table.length);
var celda1 = new_tabla.insertCell(0)
celda1.innerHTML = data.name
var celda2 = new_tabla.insertCell(1)
celda2.innerHTML = data.code
var celda3 = new_tabla.insertCell(2)
celda3.innerHTML = '<button>edit</button>'
}
function on_edit(td){
  selec = td.parentElement.parentElement;
  //document-getElementById("number").value = selec.celdas[0].innerHTML;
}

const $openclos = document.getElementById("Close-open"),
$user_close = document.getElementById("close_secion")
$openclos.addEventListener("click",()=>{
  $user_close.classList.toggle("close")
})

const $openclose = document.getElementById("open-close"),
$asaid = document.getElementById("menu")
$openclose.addEventListener("click",()=>{
$asaid.classList.toggle("desplegar")
})


