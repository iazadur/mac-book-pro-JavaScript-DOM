
const memory8 = document.getElementById('8-memory')
const memory16 = document.getElementById('16-memory')

const storage256 =document.getElementById('256-ssd')
const storage512 =document.getElementById('512-ssd')
const storage1 = document.getElementById('1-ssd')

const freeDelivery = document.getElementById('free-delivery')
const notFreeDelivery = document.getElementById('notfree-delivery')


const exMemory = document.getElementById('ex-memory')
const exStorage = document.getElementById('ex-storage')
const delivery = document.getElementById('delivery')
const bestPrice = document.getElementById('bestPrice')
const totalPrice = document.getElementById('total-price')
const total = document.getElementById('total')


// focus items
function isSelected(element) {
    return element.classList.contains('selected')
}

// total Price Calculate using function 
function totalCost() {
    totalAllPrice = parseFloat(exMemory.innerText) + parseFloat(exStorage.innerText) + parseFloat(delivery.innerText) + parseFloat(bestPrice.innerText)
    totalPrice.innerText = totalAllPrice
    total.innerText = totalAllPrice
}


// set extra Memory cost
function setExMemory(price) {
    exMemory.innerText = price
}

// set Extra SSD Cost
function setExSsd(price) {
    exStorage.innerText = price
}

// set Extra Delivery Cost
function setExDelivery(price) {
    delivery.innerText = price
}


// memory cost
memory8.addEventListener('click', function () {
if (!isSelected(memory8)) {
    
    memory8.classList.add('selected')
    memory16.classList.remove('selected')
}
    setExMemory(0)
    totalCost()
})

memory16.addEventListener('click', function () {
    if (!isSelected(memory16)) {
    
        memory8.classList.remove('selected')
        memory16.classList.add('selected')
    }
    setExMemory(180)
    totalCost()
})

// Storage Cost 
storage256.addEventListener('click', function () {
    if (!isSelected(storage256)) {
    
        storage256.classList.add('selected')
        storage512.classList.remove('selected')
        storage1.classList.remove('selected')
    }
    setExSsd(0)
    totalCost()
})

storage512.addEventListener('click', function () {
    if (!isSelected(storage512)) {
    
        storage256.classList.remove('selected')
        storage512.classList.add('selected')
        storage1.classList.remove('selected')
    }
    setExSsd(100)
    totalCost()
})

storage1.addEventListener('click', function () {
    if (!isSelected(storage1)) {
    
        storage256.classList.remove('selected')
        storage512.classList.remove('selected')
        storage1.classList.add('selected')
    }
    setExSsd(180)
    totalCost()
})

// Delivery charge 
freeDelivery.addEventListener('click', function () {
    if (!isSelected(freeDelivery)) {
    
        freeDelivery.classList.add('selected')
        notFreeDelivery.classList.remove('selected')
    }
    setExDelivery(0)
    totalCost()
})

notFreeDelivery.addEventListener('click', function () {
    if (!isSelected(notFreeDelivery)) {
    
        freeDelivery.classList.remove('selected')
        notFreeDelivery.classList.add('selected')
    }
    setExDelivery(20)
    totalCost()
})


// pomo code 
document.getElementById('pomo').addEventListener('click', function () {
    const pomoCode = document.getElementById('pomo-code')
    if (pomoCode.value == 'stevekaku') {
        total.innerText = parseFloat(totalPrice.innerText) - parseFloat(totalPrice.innerText) * 0.2
        pomoCode.value = ''
    }
})