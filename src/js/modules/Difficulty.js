import * as assets from './assets.js';

export default class Difficulty {
    constructor() {
        this.difficulty = document.querySelector(`input[name=${assets.inputName.difficulty}]:checked`).value;
        this.difficultLevels = {
            easy: 10,
            medium: 5,
            hard: 2,
        };
        this.lives = this.difficultLevels[this.difficulty];
        this.divider = this.difficultLevels[this.difficulty];
    }

    setLives() {
        assets.DOMelements.lives.innerText = this.lives;
    }

    decrementLives() {
        if(this.lives <= 0) return;
        this.lives--;
        this.setLives();
    }

    get() {
        return this.divider;
    }
}