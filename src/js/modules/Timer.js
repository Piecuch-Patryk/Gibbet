import * as assets from './assets.js';

export default class Timer {
    constructor() {
        this.timeStart;
        this.timeEnd;
        this.timeResult;
    }

    start() {
        this.timeStart = (new Date()).getTime();
    }
    
    stop() {
        this.timeEnd = (new Date()).getTime();
        this.calcResult();
    }

    calcResult() {
        this.timeResult = this.timeEnd - this.timeStart;
    }

    result() {
        return this.timeResult;
    }

    showResult() {
        let time = this.result() / 1000 / 60;
        time = time.toFixed(2);
        time = time.split('.');
        const timeString = `${time[0]}m ${time[1]}s`;
        assets.DOMelements.timeResult.innerHTML = timeString;
    }
}