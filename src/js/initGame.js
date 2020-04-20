import Image from './modules/Image.js';
import * as toggle from './modules/toggles.js';
import Category from './modules/Category.js';
import Validate from './modules/Validate.js';
import Keyboard from './modules/Keyboard.js';
import Difficulty from './modules/Difficulty.js';

const image = new Image();

export default class Game {
    init(){
        image.set();
        toggle.topLayer();

        const category = new Category();
        category.set();
        
        const difficulty = new Difficulty();
        difficulty.setLives();

        Keyboard.getAll().forEach((el) => {
            el.addEventListener('click', () => {
                const isValid = Validate.isValid(el, category);
                if(isValid){
                    toggle.button(el);
                    category.updateSecretSentence(el);
                    if(!category.isGuessed()) this.gameWon();
                }else {
                    difficulty.decrementLives();
                    image.change();
                    if(this.checkResult()) this.gameLost();
                }
            });
        });
    }

    checkResult() {
        return image.getNumber() >= image.imagesInFolder - 1;
    }

    gameWon() {
        toggle.gameOver('win');
    }

    gameLost() {
        toggle.gameOver('lost');
    }
}