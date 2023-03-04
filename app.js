const squareInput = document.querySelector('#square-input')
const squareRange = document.querySelector('#square-range')
const inputs = document.querySelectorAll('input')
const totalPriseAlemant = document.querySelector('#total-price')
const radioTypes =document.querySelectorAll('input[name="type"]')
const raidioBuilding = document.querySelectorAll('input[name="building"]')
const raidioRooms = document.querySelectorAll('input[name="rooms"]')
const ceiling = document.querySelectorAll('input[name="ceiling"]')
const walls = document.querySelectorAll('input[name="walls"]')
const floor = document.querySelectorAll('input[name="floor"]')


const basePrice = 6000;

console.log(raidioBuilding)
console.log(radioTypes)
console.log(totalPriseAlemant)
console.log(inputs)
console.log(squareInput)
console.log(squareRange)


squareInput.addEventListener('input', function() {
    squareRange.value = squareInput.value
} )

squareRange.addEventListener('input', function() {
 squareInput.value = squareRange.value
})

function calcPrice () {
    let totalPrice = basePrice * parseInt(squareInput.value)
    console.log(totalPrice);

    for(const radio of radioTypes) {
        if(radio.checked) {
            totalPrice = totalPrice * parseFloat(radio.value)
        }
    }


    for(const radio of raidioBuilding) {
        if(radio.checked) {
            totalPrice = totalPrice * parseFloat(radio.value)
        }
    }


    for(const radio of raidioRooms) {
        if(radio.checked) {
            totalPrice = totalPrice * parseFloat(radio.value)
        }
    }


    const formater = new Intl.NumberFormat('ru')
    totalPriseAlemant.innerText = formater.format(totalPrice);
}

calcPrice()

for(const input of inputs) {
    input.addEventListener('input', function() {
        calcPrice()
    })
}


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    