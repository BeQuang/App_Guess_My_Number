const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

let secretNumber = Math.trunc(Math.random() * 1000) + 1;
let lowerBound = 0;
let upperBound = 1000;

console.log(secretNumber);

const ruleBtn = $('.rule__icon')
const rule = $('.rule')
const game = $('.game')
const checkBtn = $('.game__check')
const lowNumber = $('.game__lowNumber')
const hightNumber = $('.game__hightNumber')
const curNumber = $('.game__curNumber')
const start = $('.start')
const end = $('.end')
const caseOpen = $('.caseOpen')
const caseClose = $('.caseClose')
const again = $('.game__again')

const checkNumber = function () {
    const guess = Number(curNumber.value);
    if (guess === secretNumber) {
        start.style.display = 'none'
        end.classList.remove('none')

        caseOpen.classList.add('none')
        caseClose.classList.remove('none')
    } else {
        if (guess < secretNumber) {
            lowNumber.innerText = guess
        } else {
            hightNumber.innerText = guess
        }
        curNumber.value = ''
    }
}

ruleBtn.onclick = () => {
    rule.classList.add('none')
    game.classList.remove('none')

    game.style.display = 'flex'
}

checkBtn.onclick = () => {
    checkNumber()
}

again.onclick = () => {
    start.style.display = 'flex'
    end.classList.add('none')

    caseOpen.classList.remove('none')
    caseClose.classList.add('none')

    secretNumber = Math.trunc(Math.random() * 1000) + 1;
    lowNumber.innerText = lowerBound
    hightNumber.innerText = upperBound
    curNumber.value = ''
    console.log(secretNumber)
}