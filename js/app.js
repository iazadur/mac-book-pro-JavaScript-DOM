


const exMemory = document.getElementById('ex-memory')
const exStorage = document.getElementById('ex-storage')
const delivery = document.getElementById('delivery')
const bestPrice = document.getElementById('bestPrice')
const totalPrice = document.getElementById('total-price')

// total Price Calculate using function 
function totalCost() {
    totalPrice.innerText = parseFloat(exMemory.innerText) + parseFloat(exStorage.innerText) + parseFloat(delivery.innerText) + parseFloat(bestPrice.innerText)  
}


// set extra Memory cost
function setExMemory(price) {
    exMemory.innerText = price
}
// set Extra SSD Cost
function setExSsd(price) {
    exStorage.innerText = price
}
// set Extra SSD Cost
function setExDelivery(price) {
    delivery.innerText = price
}
// memory cost

document.getElementById('8-memory').addEventListener('click', function () {
    setExMemory(0)
    totalCost()
})
document.getElementById('16-memory').addEventListener('click', function () {
    setExMemory(180)

    totalCost()
})

// Storage Cost 

document.getElementById('256-ssd').addEventListener('click', function () {
    setExSsd(0)
    totalCost()
})
document.getElementById('512-ssd').addEventListener('click', function () {
    setExSsd(100)
    totalCost()
})
document.getElementById('1-ssd').addEventListener('click', function () {
    setExSsd(180)
    totalCost()
})

// Delivery charge 

document.getElementById('free-delivery').addEventListener('click', function () {
    setExDelivery(0)
    totalCost()
})

document.getElementById('notfree-delivery').addEventListener('click', function () {
    setExDelivery(20)
    totalCost()
})


// pomo code 
document.getElementById('pomo').addEventListener('click', function () {
    const pomoCode = document.getElementById('pomo-code')
    if (pomoCode.value == 'stevekaku') {
        document.getElementById('total').innerText = parseFloat(totalPrice.innerText) - parseFloat(totalPrice.innerText) * 0.2
        pomoCode.value = ''
    }
})