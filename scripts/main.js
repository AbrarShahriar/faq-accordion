const accordionOpener = document.getElementsByClassName('icon')
const answerContainer = document.getElementsByClassName('answer-container')
const questionTitle = document.getElementsByClassName('title')

for (let i = 0; i < accordionOpener.length; i++) {
    accordionOpener[i].addEventListener('click', () => {

        answerContainer[i].classList.toggle('open')
        accordionOpener[i].classList.toggle('rotate')
        questionTitle[i].classList.toggle('bold')

    })
}