import * as assets from './assets.js';
import Difficulty from './Difficulty.js';

export default class Image {
    constructor() {
        this.number = 0;
        this.imagesInFolder = 11;
        this.imgEl = assets.DOMelements.img;
    }
    set() {
        if(this.number >= this.imagesInFolder) return;
        
        this.imgEl.classList.add(assets.classes.imgAnimate);
        this.imgEl.addEventListener('transitionend', () => {


            this.imgEl.src = `./assets/img/gibbet${this.number}.png`;
            this.imgEl.classList.remove(assets.classes.imgAnimate);
        });
        

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