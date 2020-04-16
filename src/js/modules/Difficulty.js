import * as assets from './assets.js';

export default class Difficulty {
    constructor() {
        this.difficulty = document.querySelector(`input[name=${assets.inputName.difficulty}]:checked`).value;
        this.difficulLevels = {
            easy: 8,
            medium: 4,
            hard: 2,
        };
    }

    setLives() {
        assets.DOMelements.lives.innerText = this.difficulLevels[this.difficulty];
    }
}