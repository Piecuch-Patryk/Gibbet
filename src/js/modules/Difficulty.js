import * as assets from './assets.js';

export default class Difficulty {
    constructor() {
        this.difficulty = assets.DOMelements.inputDifficulty.value;
        this.difficulLevels = {
            easy: 10,
            medium: 8,
            hard: 4,
        };
    }

    setLives() {
        //
    }
}