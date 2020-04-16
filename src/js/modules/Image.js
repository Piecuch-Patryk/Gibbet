import * as assets from './assets.js';
import Difficulty from './Difficulty.js';

export default class Image {
    constructor() {
        this.imageNumber = 0;
        this.numberImagesInFolder = 11;
    }
    set() {
        assets.DOMelements.img.src = `../../assets/img/gibbet${this.imageNumber}.png`;
    }
    change() {
        const difficulty = new Difficulty();
        const divider = difficulty.get();
        const calculated = Math.floor(this.numberImagesInFolder / divider);

        this.imageNumber+=calculated;
        this.set();
    }
}