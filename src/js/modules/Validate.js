export default class Validate {
    static isValid(el, categoryObj) {
        const secretSentence = categoryObj.currentRandomEl.title.toLowerCase();
        const letter = el.innerText.toLowerCase();
        return secretSentence.includes(letter);
    }
}