import * as assets from './assets.js';

export default class Image {
    constructor() {
        this.imageNumber = 0;
    }
    set() {
        assets.DOMelements.img.src = `../../assets/img/gibbet${this.imageNumber}.png`;
        this.imageNumber++;
    }
}