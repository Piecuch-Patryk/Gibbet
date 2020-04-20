import Image from './modules/Image.js';
import * as toggle from './modules/toggles.js';
import Category from './modules/Category.js';
import Validate from './modules/Validate.js';
import Keyboard from './modules/Keyboard.js';
import Difficulty from './modules/Difficulty.js';
import Timer from './modules/Timer.js';

const image = new Image();
const timer = new Timer();

export default class Game {
    init(){
        toggle.topLayer();
        timer.start();
        
        image.set();

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
                    if(!category.isGuessed()) this.gameOver('win');
                }else {
                    difficulty.decrementLives();
                    image.change();
                    if(this.checkResult()) this.gameOver('lost');
                }
            });
        });
    }

    checkResult() {
        return image.getNumber() >= image.imagesInFolder - 1;
    }

    gameOver(result) {
        timer.stop();
        if(result === 'win') {
            timer.showResult();
            toggle.gameOver(result);
        }else {
            toggle.gameOver(result);
        }
    }

    reset() {
        window.location.reload();
    }
}