class objective {
    builder() {
        this.container = document.getElementById('listaobjectives')
        this.number = document.getElementById('numbers')
        this.unique = document.getElementById('unique')
    }
    create() {
        if (parseInt(this.number.value) === 1) {
            this.unique.style.display = 'block'
        } else {
            if (parseInt(this.number.value) > 1) {
                if (parseInt(this.number.value) <= 4) {
                    for (let i = 0; i < parseInt(this.number.value); i++) {
                        let input = document.createElement('textarea')
                        input.setAttribute('type', 'text')
                        input.name = 'objectives'
                        input.id = 'extras'
                        this.container.appendChild(input)
                    }
                } else {
                    alert('This field allows from 1 to 4 objectives')
                }
            }
        } 
    }

    inicio() {
        this.unique.style.display = 'none' 
    }
}

let objectives = new objective

window.onload = objectives.beginning()