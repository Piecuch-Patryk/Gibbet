import './css/styles.css';
import InitGame from './js/initGame.js';
import * as assets from './js/modules/assets.js';
import Keyboard from './js/modules/Keyboard.js';



document.addEventListener('DOMContentLoaded', () => {
    const Keys = new Keyboard();
    Keys.appendKeyboard();

    assets.DOMelements.btnStartGame.addEventListener('click', InitGame.init);
});