import * as assets from './assets.js';

export default class Keyboard {
    constructor() {
        this.alphabet = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
    }
    createBtns() {
        const buttons = [];
        this.alphabet.forEach(el => {
            const btn = assets.createEl.keyboardBtn.cloneNode();
            btn.classList.add(assets.classes.btnLetter);
            btn.innerText = el;
            buttons.push(btn);
        });
        this.buttons = buttons;
        return buttons;
    }
    createKeyboard() {
        const buttons = this.createBtns();
        const row_1 = assets.createEl.div.cloneNode();
        const row_2 = assets.createEl.div.cloneNode();
        const row_3 = assets.createEl.div.cloneNode();
        let keyboard = assets.createEl.div.cloneNode();

        buttons.forEach((el, i) => {
            if(i <= 9) row_1.append(el); 
            if(i >=10 && i <= 18) row_2.append(el);
            if(i >= 19) row_3.append(el);
        });

        keyboard.classList.add(assets.classes.keyboard);
        keyboard.append(row_1, row_2, row_3);
        return keyboard;
    }
    appendKeyboard() {
        this.createKeyboard();
        assets.DOMelements.keyboard.append(this.createKeyboard());
    }
    
    static getAll() {
        return document.querySelectorAll(`.${assets.classes.btnLetter}`);
    }
}