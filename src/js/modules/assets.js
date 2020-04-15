const ID = {
    btnStart: 'btn-start',
    img: 'img',
    topLayer: 'top-layer',
    keyboard: 'keyboard-container',
}

export const classes = {
    isHidden: 'is-hidden',
    fadeOut: 'fade-out',
    btnLetter: 'btn-letter',
    keyboard: 'keyboard',
} 

export const DOMelements = {
    btnStartGame: document.getElementById(ID.btnStart),
    img: document.getElementById(ID.img),
    topLayer: document.getElementById(ID.topLayer),
    keyboard: document.getElementById(ID.keyboard),
}

export const createEl = {
    keyboardBtn: document.createElement('button'),
    div: document.createElement('div'),
}