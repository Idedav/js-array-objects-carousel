// ARRAY
const carouselWrapper= [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
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