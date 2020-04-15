import Image from './modules/Image.js';
import * as toggle from './modules/toggles.js'; 


export default class Game {
    static init(){
        Image.set(0);
        toggle.topLayer();
    }
}