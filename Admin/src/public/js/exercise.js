class getNumber{
    constructor(){
        this.container = document.getElementById('exercises')
        this.number = document.getElementById('numbers')
    }

    create(){
        for(let i = 0; i<parseInt(this.number.value); i++){
        let input = document.createElement('input')
        input.setAttribute('type', 'text')
        input.name = 'exercises'
        this.container.appendChild(input)
        }
    }
}