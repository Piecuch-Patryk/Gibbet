import './css/styles.css';
import Game from './js/initGame.js';
import * as assets from './js/modules/assets.js';
import Keyboard from './js/modules/Keyboard.js';
import '@fortawesome/fontawesome-free/js/all';


document.addEventListener('DOMContentLoaded', () => {
    const Keys = new Keyboard();
    Keys.appendKeyboard();

    const game = new Game();

    assets.DOMelements.btnStartGame.addEventListener('click', () => game.init());
    assets.DOMelements.btnsReset.forEach(el => el.addEventListener('click', game.reset));
});