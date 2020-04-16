import * as assets from './assets.js'; 

export function topLayer() {
    const el = assets.DOMelements.topLayer;
    if(el.classList.contains(assets.classes.isHidden)){
        el.classList.remove(assets.classes.fadeOut);
        el.addEventListener('transitionend', () => el.classList.remove(assets.classes.isHidden));
    }else {
        el.classList.add(assets.classes.fadeOut);
        el.addEventListener('transitionend', () => el.classList.add(assets.classes.isHidden));
    }
}

export function button(element) {
    element.classList.add(assets.classes.btnSuccess);
}

export function lostLayer() {
    //
}