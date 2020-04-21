import * as assets from './assets.js';

export default class Category {
    constructor() {
        this.category = document.querySelector(`input[name=${assets.inputName.category}]:checked`).value;
        this.categories = {
            movie: {
                1: {
                    title: 'The Hunger Games',
                    hint: 'Every year in the ruins of what was once North America, the nation of Panem forces each of its twelve districts to send a teenage boy and girl to compete in...',
                },
                2: {
                    title: 'Idiocracy',
                    hint: 'To test its top-secret Human Hibernation Project, the Pentagon picks the most average Americans it can find - an Army private and a prostitute - and sends them to the year 2505',
                },
                3: {
                    title: 'Shrek',
                    hint: 'American computer-animated comedy film loosely based on the 1990 fairytale picture book of the same name by William Steig. Directed by Andrew Adamson and Vicky Jenson in their directorial debuts, it stars Mike Myers, Eddie Murphy, Cameron Diaz and John Lithgow as the voices of the lead characters.',
                },
                4: {
                    title: 'Home Alone',
                    hint: '1990 American comedy film written and produced by John Hughes and directed by Chris Columbus. It stars Macaulay Culkin, Joe Pesci, Daniel Stern, John Heard, and Catherine O\'Hara. The film follows an eight-year-old boy (Culkin), who must defend his home from two burglars (Pesci and Stern) after his family mistakenly leaves him behind on their Christmas vacation.',
                },
                5: {
                    title: 'Eagle Eye',
                    hint: 'The plot follows two strangers who must go on the run together after receiving a mysterious phone call from an unknown woman who is using information and communications technology to track them.',
                },
            },
            car: {
                1: {
                    title: 'Audi',
                    hint: 'German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles. Member of the Volkswagen Group.',
                },
                2: {
                    title: 'Ford',
                    hint: 'American multinational automaker that has its main headquarters in Dearborn, Michigan, a suburb of Detroit.',
                },
                3: {
                    title: 'Porsche',
                    hint: 'German automobile manufacturer specializing in high-performance sports cars, SUVs and sedans. The headquarter is in Stuttgart.',
                },
                4: {
                    title: 'Bentley',
                    hint: ' British manufacturer and marketer of luxury cars and SUVs—and a subsidiary of the Volkswagen Group since 1998.',
                },
                5: {
                    title: 'Lada',
                    hint: 'cars manufactured by AvtoVAZ (originally VAZ), a Russian company owned by the French Groupe Renault.[1] The first cars manufactured by AvtoVAZ, with technical assistance from Fiat, were marketed under the Zhiguli brand',
                },
                6: {
                    title: 'Honda',
                    hint: 'Japanese public multinational conglomerate corporation primarily known as a manufacturer of automobiles, motorcycles, and power equipment. Largest motorcycle manufacturer since 1959,',
                },
                7: {
                    title: 'Mercedes',
                    hint: 'German global automobile marque and a division of Daimler AG. The name first appeared in 1926 under Daimler-Benz. In 2018.',
                },
            },
        };
        this.chosenCategory = this.categories[this.category];
        this.currentRandomEl = '';
    }

    random() {
        const length = Object.keys(this.chosenCategory).length;
        return Math.floor(Math.random() * length + 1);
    }

    set() {
        const chosen = this.chosenCategory[this.random()];
        const title = chosen.title.split('');
        this.currentRandomEl = chosen;
        this.resetSecretSentence();
        this.setHint(chosen)

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

    setHint(chosenObj) {
        assets.DOMelements.hint.innerHTML = chosenObj.hint;
    }

    updateSecretSentence(el) {
        let letter = el.innerText.toLowerCase();
        const secretSentence = this.currentRandomEl.title.toLowerCase().split('');
        const hiddenSecretSentence = assets.DOMelements.secretSentence.innerText.split('');
        const indexes = [];
       
        secretSentence.forEach((el, i) => {
            if(el === letter) indexes.push(i);
        });

        indexes.forEach((el, i) => {
            if(el === 0) letter = letter.toUpperCase();
            else letter = letter.toLowerCase();
            hiddenSecretSentence[el] = letter;
        });

        assets.DOMelements.secretSentence.innerText = hiddenSecretSentence.join('');
    }

    isGuessed() {
        return assets.DOMelements.secretSentence.innerText.includes('_');
    }
    
}