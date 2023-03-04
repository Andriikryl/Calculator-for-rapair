const squareInput = document.querySelector('#square-input')
const squareRange = document.querySelector('#square-range')
const inputs = document.querySelectorAll('input')



const basePrice = 6000;



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
    console.log(totalPrice)
}

calcPrice()

for(const input of inputs) {
    input.addEventListener('input', function() {
        calcPrice()
    })
}


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    