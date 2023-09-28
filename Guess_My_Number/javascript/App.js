const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

let secretNumber = Math.trunc(Math.random() * 1000) + 1;
let lowerBound = 0;
let upperBound = 1000;

console.log(secretNumber);

const lowNumber = $('.game__low-number')
const highNumber = $('.game__hight-number')
const guessNumber = $('.game__cur-number')
const checkBtn = $('.game__check')
const againBTn = $('.game__again')
const caseClose = $('.caseClose')
const caseOpen = $('.caseOpen')
const boardColor = $('.board-color')
const containerBoardColor = $('.board-color__container')
const listColorItems = $$('.board-color__item')

lowNumber.innerText = lowerBound
highNumber.innerText = upperBound

const checkNumber = function() {
    const guess = Number(guessNumber.value)

    if (guess === secretNumber) {
        caseClose.classList.add('none')
        caseOpen.classList.remove('none')
        caseOpen.classList.add('animate__bounceIn')

        checkBtn.classList.add('none')
        againBTn.classList.remove('none')

        boardColor.style.display = 'flex'
        containerBoardColor.classList.add('animate__bounceIn')
    }
    else if (guess < secretNumber) {
        lowNumber.innerText = guess
        guessNumber.value = ''
        
        lowNumber.classList.add('animate__fadeInTopLeft')
    } else {
        highNumber.innerText = guess
        guessNumber.value = ''

        highNumber.classList.add('animate__fadeInTopRight')
    }
}

checkBtn.onclick = () => {
    lowNumber.classList.remove('animate__fadeInTopLeft')
    highNumber.classList.remove('animate__fadeInTopRight')
    checkNumber()
}

guessNumber.onkeyup = (e) => {
    lowNumber.classList.remove('animate__fadeInTopLeft')
    highNumber.classList.remove('animate__fadeInTopRight')
    if (e.keyCode === 13) {
        checkNumber()
    }
}

againBTn.onclick = () => {
    caseClose.classList.remove('none')
    caseClose.classList.add('animate__bounceIn')
    caseOpen.classList.add('none')

    checkBtn.classList.remove('none')
    againBTn.classList.add('none')

    lowNumber.innerText = lowerBound
    highNumber.innerText = upperBound

    guessNumber.value = ''
    secretNumber = Math.trunc(Math.random() * 1000) + 1;
    console.log(secretNumber)
}


listColorItems.forEach(item => {
    item.onclick = (e) => {
        e.target.parentNode.style.textDecoration = 'line-through'
        e.target.parentNode.classList.add('opacity')

        boardColor.style.display = 'none'
    }
});