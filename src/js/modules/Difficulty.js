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
        this.livesDOMwrap = assets.DOMelements.livesWrap;
        this.livesDOMel = assets.DOMelements.lives;
    }

    setLives() {
        this.livesDOMel.innerText = this.lives;
    }

    animateLives() {
        const toAnimate = this.livesDOMwrap.cloneNode(true);
        toAnimate.classList.add(assets.classes.heartAnimation);
        toAnimate.addEventListener('animationend', () => toAnimate.remove());
        assets.DOMelements.container.appendChild(toAnimate);
    }

    decrementLives() {
        if(this.lives <= 0) return;
        this.lives--;
        this.animateLives();
        this.setLives();
    }

    get() {
        return this.divider;
    }
}