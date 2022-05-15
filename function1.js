let simpleFunction = function () {
    console.log('Hello world');
}

simpleFunction();

let sayHelloTo = function (name) {
    console.log('Hello ' + name + '!');
}
sayHelloTo('Aleksei')

let printMultipleTimes = function (howManyTimes, whatToDraws) {
    for (i = 0; i < howManyTimes; i++) {
        console.log(i + '' + whatToDraws);
    }
}
printMultipleTimes(10, "=^.^=");

let double = function(number) {
    return number * 2;
}
console.log(double(double(3)));


let pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
}
let randomWords = ["Планета", "Червяк", "Цветок", "Компьютер"];
console.log(pickRandomWord(randomWords));

let randomBodyParts = ['голова','ухо','рука','нога'];
let randomAdjectives = ['огромный','рыхлая','большая'];
// let randomWords = ['ветка','вареник','жопа','костыль','сабля'];
let randomPrils = ['больше','страшнее','грязнее'];
let randomAnimals = ['выдры','зайца','кенгуру','лошади'];
let randomAnimalParts = ['ухо','жопа','лапа','голова'];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 4)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
let randomWord = randomWords[Math.floor(Math.random() * 5)];
let randomPril = randomPrils[Math.floor(Math.random() * 3)];
let randomAnimal = randomAnimals[Math.floor(Math.random() * 4)];
let randomAnimalPart = randomAnimalParts[Math.floor(Math.random() * 4)];


let randomInsult = ['У тебя',pickRandomWord(randomBodyParts) ,'еще более', pickRandomWord(randomPrils), 'чем', pickRandomWord(randomAnimalParts),'у',pickRandomWord(randomAnimals),'!!!'].join(' ');

console.log(randomInsult);


let genereteRandomInsult = function() {
    let randomBodyParts = ["глаз", "нос", "череп"];
    let randomAdjectives = ["вонючая", "унылая", "дурацкая"];
    let randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
    let randomString = 'У тебя ' + pickRandomWord(randomBodyParts) + ' словно ' + pickRandomWord(randomAdjectives) + ' ' + pickRandomWord(randomWords) + '!!!';
    return randomString;
}
console.log(genereteRandomInsult());


let fifthLetter = function(name) {
    if ( name < 5) {
        renurn;
    }
    return 'Пятая буква вашего имени: ' + name[4] + '.';
}
console.log(fifthLetter('Aleksei'));

let medalForScore = function(score) {
    if (score < 3) {
        return 'Бронзовая';
    }
    if (score < 7) {
        return 'Серебряная';
    }
    return 'Золотая';
}
console.log(medalForScore(2));



function add(a,b) {
    c = a + b;
    return c;
};
function multiply(a,b) {
    c = a * b;
    return c;
};
console.log(add(multiply(36325, 9824), (777)));


function areArraysSame (arr1,arr2) {
    if(arr1.length === arr2.length) {
    for (i = 0; i < arr1.length; i++) {
        if(arr1[i] === arr2[i]){
            return true;
        }
        return false;
    }
}
return false;
}
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));




