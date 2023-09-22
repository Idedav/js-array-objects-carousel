// ARRAY
const carouselWrapper= [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
]
const slicesImages = document.querySelector('.slices')
const carouselImages = document.querySelector('.caurosel-img');
let counterImg = 0
// BUTTONS
const btnTop = document.querySelector('.btn-top')
const btnBot = document.querySelector('.btn-bottom')
// CICLE
for (let i = 0; i < carouselWrapper.length; i++){
    const img = carouselWrapper[i]
    carouselImages.innerHTML += `<img src=${img} class='item hide'>`
    slicesImages.innerHTML += `<img src=${img} class='slice'>`
}
    const slicesWrapper = document.getElementsByClassName('slice')
    slicesWrapper[0].classList.add('active')
    const itemsWrapper = document.getElementsByClassName('item');
    itemsWrapper[0].classList.remove('hide')

    btnBot.addEventListener('click', function(){
        next();
        if(counterImg != itemsWrapper.length - 1){
            counterImg++
        }else{
            counterImg = 0
        }
        prev();
    })

    btnTop.addEventListener('click', function(){
        next();
        if(counterImg != 0){
            counterImg--
        }else{
            counterImg = itemsWrapper.length - 1
        }
        prev();
    })

    // FUNCTIONS

    function next(){
        itemsWrapper[counterImg].classList.add('hide')
        slicesWrapper[counterImg].classList.remove('active')
    }

    function prev(){
        slicesWrapper[counterImg].classList.add('active')
        itemsWrapper[counterImg].classList.remove('hide')
    }