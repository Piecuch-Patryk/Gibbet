import * as assets from './assets.js';

export default class Image {
    static set(number) {
        assets.DOMelements.img.src = `../../assets/img/gibbet${number}.png`;
    }
}