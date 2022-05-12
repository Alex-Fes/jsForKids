let score = {
    yana : 0,
    vitya : 0,
    max : 0
};
score.yana += 5;
score.max += 3;
score.vitya += -3;
score.vitya += 7;

console.log(score);


let obj = {
    name: 'random',
    someArray: [7, 9, { purpose: "путаница", number: 123 }, 3.3],
    randomAnimal: "Банановая акула"
};

console.log(obj.someArray[2].number);