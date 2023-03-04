const squareInput = document.querySelector('#square-input')
const squareRange = document.querySelector('#square-range')
const inputs = document.querySelectorAll('input')
const totalPriseAlemant = document.querySelector('#total-price')
const radioTypes =document.querySelectorAll('input[name="type"]')


const basePrice = 6000;

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


    
    const formater = new Intl.NumberFormat('ru')
    totalPriseAlemant.innerText = formater.format(totalPrice);
}

calcPrice()

for(const input of inputs) {
    input.addEventListener('input', function() {
        calcPrice()
    })
}


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    