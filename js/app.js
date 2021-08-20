


const exMemory = document.getElementById('ex-memory')
const exStorage = document.getElementById('ex-storage')
const delivery = document.getElementById('delivery')
const bestPrice = document.getElementById('bestPrice')
const totalPrice = document.getElementById('total-price')

// total Price Calculate using function 
function totalCost() {
    totalPrice.innerText = parseFloat(exMemory.innerText) + parseFloat(exStorage.innerText) + parseFloat(delivery.innerText) + parseFloat(bestPrice.innerText)
    
    
}

// memory cost

const memory8 = document.getElementById('8-memory').addEventListener('click', function () {
    exMemory.innerText = 0
    totalCost()
})
const memory16 = document.getElementById('16-memory').addEventListener('click', function () {
    exMemory.innerText = 180
    totalCost()
})

// Storage Cost 

document.getElementById('256-ssd').addEventListener('click', function () {
    exStorage.innerText = 0
    totalCost()
})
document.getElementById('512-ssd').addEventListener('click', function () {
    exStorage.innerText = 100
    totalCost()
})
document.getElementById('1-ssd').addEventListener('click', function () {
    exStorage.innerText = 180
    totalCost()
})

// Delivery charge 

document.getElementById('free-delivery').addEventListener('click', function () {
    delivery.innerText = 0
    totalCost()
})

document.getElementById('notfree-delivery').addEventListener('click', function () {
    delivery.innerText = 20
    totalCost()
})

