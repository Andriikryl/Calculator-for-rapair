const squareInput = document.querySelector('#square-input')
const squareRange = document.querySelector('#square-range')
console.log(squareInput)
console.log(squareRange)


squareInput.addEventListener('input', function() {
    squareRange.value = squareInput.value
} )

squareRange.addEventListener('input', function() {
 squareInput.value = squareRange.value
})


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    