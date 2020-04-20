const ID = {
    btnStart: 'btn-start',
    img: 'img',
    topLayer: 'top-layer',
    keyboard: 'keyboard-container',
    secretSentence: 'secret-sentence',
    hint: 'hint',
    lives: 'lives',
    winLayer: 'game-over-win',
    lostLayer: 'game-over-lost',
}

export const classes = {
    isHidden: 'is-hidden',
    fadeOut: 'fade-out',
    btnLetter: 'btn-letter',
    keyboard: 'keyboard',
    btnSuccess: 'btn-success',
}

export const inputName = {
    category: 'category',
    difficulty: 'difficulty',
}

export const DOMelements = {
    btnStartGame: document.getElementById(ID.btnStart),
    img: document.getElementById(ID.img),
    topLayer: document.getElementById(ID.topLayer),
    keyboard: document.getElementById(ID.keyboard),
    secretSentence: document.getElementById(ID.secretSentence),
    hint: document.getElementById(ID.hint),
    lives: document.getElementById(ID.lives),
    winLayer: document.getElementById(ID.winLayer),
    lostLayer: document.getElementById(ID.lostLayer),
}

export const createEl = {
    keyboardBtn: document.createElement('button'),
    div: document.createElement('div'),
}