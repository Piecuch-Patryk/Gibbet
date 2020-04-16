import './css/styles.css';
import InitGame from './js/initGame.js';
import * as assets from './js/modules/assets.js';
import Keyboard from './js/modules/Keyboard.js';
import '@fortawesome/fontawesome-free/js/all';


document.addEventListener('DOMContentLoaded', () => {
    const Keys = new Keyboard();
    Keys.appendKeyboard();

    const game = new InitGame();

    assets.DOMelements.btnStartGame.addEventListener('click', () => game.init());
});