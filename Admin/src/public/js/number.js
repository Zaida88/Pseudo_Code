
class getNumber {
    constructor() {
        this.number = document.getElementById('number')
    }
    increase() {
        if (this.number.value === '') {
            this.number.value = 1
        } else {
            this.number.value = parseInt(this.number.value) + 1
        }
    }
}

let numbers = new getNumber()

window.onload = numbers.increase()