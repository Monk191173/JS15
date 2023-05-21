'use strict'
let scrDown = document.getElementsByClassName('scrDown')[0];
let slFromLeftH = document.getElementsByClassName('slFromLeftH')[0];
let slFromLeftDiv = document.getElementsByClassName('slFromLeftDiv')[0];
let scrImg = document.getElementsByClassName('scrImg')[0];
let scrUp = document.getElementsByClassName('scrUp')[0];

let Dvizhuha = () => {
    if (window.scrollY < 600) scrDown.style.fontSize = (33 + Math.round(window.scrollY / 12)) + 'px';
    slFromLeftH.style.left = Math.round(window.scrollY / 18) + 'px';
    slFromLeftDiv.style.left = Math.round(window.scrollY / 18) + 'px';
    slFromLeftDiv.style.width = (170 + Math.round(window.scrollY / 8)) + 'px';
    let coo = 60 - Math.round(window.scrollY / 18);
    scrImg.style.left = (coo < 0 ? 0 : coo) + '%';
    scrUp.style.fontSize = (50 - Math.round(window.scrollY / 50)) + 'px';
}

scrDown.addEventListener('click', () => {
    // window.removeEventListener('scroll',Dvizhuha);
    document.getElementsByClassName('whiteBlock')[0].scrollIntoView({ behavior: "smooth" });
})

scrUp.addEventListener('click', () => {
    window.scroll({ top: 0, behavior: "smooth" });
})


window.addEventListener('scroll', Dvizhuha);