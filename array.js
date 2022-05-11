let randomBodyParts = ['голова','ухо','рука','нога'];
let randomAdjectives = ['огромный','рыхлая','большая'];
let randomWords = ['ветка','вареник','жопа','костыль','сабля'];
let randomPrils = ['больше','страшнее','грязнее'];
let randomAnimals = ['выдры','зайца','кенгуру','лошади'];
let randomAnimalParts = ['ухо','жопа','лапа','голова'];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 4)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
let randomWord = randomWords[Math.floor(Math.random() * 5)];
let randomPril = randomPrils[Math.floor(Math.random() * 3)];
let randomAnimal = randomAnimals[Math.floor(Math.random() * 4)];
let randomAnimalPart = randomAnimalParts[Math.floor(Math.random() * 4)];


let randomInsult = ['У тебя', randomBodyPart ,'еще более', randomPril, 'чем', randomAnimalPart,'у',randomAnimal,'!!!'].join(' ');
// console.log(randomInsult);

let numbers = [2,34,54,65,77];
let lastNumber = numbers.pop();
let lastNumber1 = numbers.pop();
let lastNumber2 = numbers.pop();
let lastNumber3 = numbers.pop();
let lastNumber4 = numbers.pop();

let result = [lastNumber,' больше чем ', lastNumber1,', больше чем ', lastNumber2,', больше чем ', lastNumber3,', больше чем ', lastNumber4].join('');
console.log(result);


