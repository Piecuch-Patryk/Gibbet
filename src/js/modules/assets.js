const ID = {
    btnStart: 'btn-start',
    img: 'img',
    topLayer: 'top-layer',
    keyboard: 'keyboard-container',
    secretSentence: 'secret-sentence',
    hint: 'hint',
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
    inputDifficulty: document.querySelector(`input[name=${inputName.difficulty}]:checked`),
    secretSentence: document.getElementById(ID.secretSentence),
    hint: document.getElementById(ID.hint),
}

export const createEl = {
    keyboardBtn: document.createElement('button'),
    div: document.createElement('div'),
}