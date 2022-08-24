class comentario{
    constructor(){
        this.contenedor = document.getElementById('comentarios')
        this.numero = document.getElementById('numeros')
    }
    crear(){
        for(let i = 0; i<parseInt(this.numero.value); i++){
        let input = document.createElement('input')
        input.setAttribute('type', 'text')
        input.name = 'comentarios'
        this.contenedor.appendChild(input)
        }
    }
}

let objetivos = new comentario