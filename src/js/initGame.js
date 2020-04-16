import Image from './modules/Image.js';
import * as toggle from './modules/toggles.js';
import Category from './modules/Category.js';
import Validate from './modules/Validate.js';
import Keyboard from './modules/Keyboard.js';


export default class Game {
    static init(){
        Image.set(0);
        toggle.topLayer();

        const category = new Category();
        category.set();
        
        Keyboard.getAll().forEach((el) => {
            el.addEventListener('click', e => {
                const isValid = Validate.isValid(el, category);
                if(isValid){
                    toggle.button(el);
                    category.updateSecretSentence(el);
                }else {
                    console.log(false);
                }
                
            });
        });


    }
}