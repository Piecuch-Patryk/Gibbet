import * as assets from './assets.js';

export default class Category {
    constructor() {
        this.category = document.querySelector(`input[name=${assets.inputName.category}]:checked`).value;
        this.categories = {
            movie: {
                1: {
                    title: 'The Hunger Games',
                    hint: 'Every year in the ruins of what was once North America, the nation of Panem forces each of its twelve districts to send a teenage boy and girl to compete in',
                },
                2: {
                    title: 'Idiocracy',
                    hint: 'To test its top-secret Human Hibernation Project, the Pentagon picks the most average Americans it can find - an Army private and a prostitute - and sends them to the year 2505',
                }
            },
            car: {
                1: {
                    title: 'Audi',
                    hint: 'German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles. Member of the Volkswagen Group.',
                },
                2: {
                    title: 'Ford',
                    hint: 'American multinational automaker that has its main headquarters in Dearborn, Michigan, a suburb of Detroit.',
                }
            },
        };
        this.chosenCategory = this.categories[this.category];
    }

    random() {
        const length = Object.keys(this.chosenCategory).length;
        return Math.floor(Math.random() * length + 1);
    }

    set() {
        const title = this.chosenCategory[this.random()].title.split('');
        this.resetSecretSentence();

        title.forEach(el => {
            let letter;
            if(el === ' ') letter = ' ';
            else letter = '_'; 
            assets.DOMelements.secretSentence.innerHTML += letter;
        });
    }

    resetSecretSentence() {
        assets.DOMelements.secretSentence.innerHTML = '';
    }

}