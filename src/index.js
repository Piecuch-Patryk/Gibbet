import './css/styles.css';
import InitGame from './js/initGame.js';
import * as assets from './js/modules/assets.js';


assets.DOMelements.btnStartGame.addEventListener('click', InitGame.init);