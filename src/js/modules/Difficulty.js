import * as assets from './assets.js';

export default class Difficulty {
    constructor() {
        this.difficulty = document.querySelector(`input[name=${assets.inputName.difficulty}]:checked`).value;
        this.difficulLevels = {
            easy: 8,
            medium: 4,
            hard: 2,
        };
        this.lives = this.difficulLevels[this.difficulty];
    }

    setLives() {
        assets.DOMelements.lives.innerText = this.lives;
    }

    decrementLives() {
        this.lives--;
        this.setLives();
    }
}