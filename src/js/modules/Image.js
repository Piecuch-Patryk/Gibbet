import * as assets from './assets.js';
import Difficulty from './Difficulty.js';

export default class Image {
    constructor() {
        this.number = 0;
        this.imagesInFolder = 11;
    }
    set() {
        if(this.number >= this.imagesInFolder) return;
        assets.DOMelements.img.src = `./assets/img/gibbet${this.number}.png`;
    }
    change() {
        const difficulty = new Difficulty();
        const divider = difficulty.get();
        const calculated = Math.floor(this.imagesInFolder / divider);

        this.number+=calculated;
        this.set();
    }
    getNumber() {
        return this.number;
    }
}