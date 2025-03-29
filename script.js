const textarea = document.getElementById('textarea')

// Numbers and Point
const one_button = document.getElementById('one-btn')
const two_button = document.getElementById('two-btn')
const three_button = document.getElementById('three-btn')
const four_button = document.getElementById('four-btn')
const five_button = document.getElementById('five-btn')
const six_button = document.getElementById('six-btn')
const seven_button = document.getElementById('seven-btn')
const eight_button = document.getElementById('eight-btn')
const nine_button = document.getElementById('nine-btn')
const zero_button = document.getElementById('zero')
const point_button = document.getElementById('point')

// Operations
const equal_button = document.getElementById('equals')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const multiply = document.getElementById('multiply')
const divide = document.getElementById('divide')
const percentage = document.getElementById('percentage')
const clear = document.getElementById('clear')

// TODO: Fix multiple different operators coming together

// Event Listeners 
zero_button.addEventListener('click', function () {
    content = textarea.textContent
    textarea.innerHTML = content + '0'
})

one_button.addEventListener('click', function () {
    content = textarea.textContent
    textarea.innerHTML = content + '1'
})

two_button.addEventListener('click', function () {
    content = textarea.textContent
    textarea.innerHTML = content + '2'
})

three_button.addEventListener('click', function () {
    content = textarea.textContent
    textarea.innerHTML = content + '3'
})

four_button.addEventListener('click', function () {
    content = textarea.textContent
    textarea.innerHTML = content + '4'
})

five_button.addEventListener('click', function () {
    content = textarea.textContent
    textarea.innerHTML = content + '5'
})

six_button.addEventListener('click', function () {
    content = textarea.textContent
    textarea.innerHTML = content + '6'
})

seven_button.addEventListener('click', function () {
    content = textarea.textContent
    textarea.innerHTML = content + '7'
})


eight_button.addEventListener('click', function () {
    content = textarea.textContent
    textarea.innerHTML = content + '8'
})

nine_button.addEventListener('click', function () {
    content = textarea.textContent
    textarea.innerHTML = content + '9'
})

point_button.addEventListener('click', function () {
    content = textarea.textContent
    if (content.slice(-1) != '.') {
        textarea.innerHTML = content + '.'
    }
})

plus.addEventListener('click', function () {
    content = textarea.textContent
    if (content.slice(-1) != '+') {
        textarea.innerHTML = content + '+'
    }
})

minus.addEventListener('click', function () {
    content = textarea.textContent
    if (content.slice(-1) != '-') {
        textarea.innerHTML = content + '-'
    }
})

multiply.addEventListener('click', function () {
    content = textarea.textContent
    if (content.slice(-1) != '*') {
        textarea.innerHTML = content + '*'
    }
})

divide.addEventListener('click', function () {
    content = textarea.textContent
    if (content.slice(-1) != '/') {
        textarea.innerHTML = content + '/'
    }
})

percentage.addEventListener('click', function () {
    content = textarea.textContent
    //FIXME: if (content.slice(-4,-1,-1) != '/100') {
        textarea.innerHTML = content + '/100'
    // }
})

clear.addEventListener('click', function () {
    content = textarea.textContent
    textarea.innerHTML = ''
})


equal_button.addEventListener('click', function () {
    try {
        console.log
        content = textarea.textContent
        textarea.innerHTML = eval(content)
    } catch {
        alert('Something went wrong!')
    }
})
