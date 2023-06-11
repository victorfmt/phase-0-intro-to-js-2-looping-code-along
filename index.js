

const names = ["Guadalupe", "Ollie", "Aki"];
const e = "birthday";

function writeCards(names, event) {
    let cards = [];
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        cards.push(message);
    };
    return cards;
};

function countDown(number) {
    for (let i = number; i > -1; i--) {
        console.log(i) ;
    };  
};