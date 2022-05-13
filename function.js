var pickWord = function () {
    let words = ['велосипед', 'лампа', 'автомобиль', 'карусель', 'магазин', 'макака'];
    return words[Math.floor(Math.random() * words.length)];// Возвращает случайно выбранное слово
};
var setupAnswerArray = function (word) {
    let answerArray = [];
    for (i = 0; i < word.length; i++) {
        answerArray[i] = '_';
    }
    return answerArray;
    // Возвращает итоговый массив для заданного слова word
};
var showPlayerProgress = function (answerArray) {
    alert(answerArray.join(' '));
    // С помощью alert отображает текущее состояние игры
};
var getGuess = function () {
    return prompt('Назовите букву или нажмите "Отмена" для выхода из игры');
    // Запрашивает ответ игрока с помощью prompt
};
var updateGameState = function (guess, word, answerArray) {

    var appearances = 0;
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            appearances++;
        }
    }

    return appearances;

    // Обновляет answerArray согласно ответу игрока (guess)
    // возвращает число, обозначающее, сколько раз буква guess
    // встречается в слове, чтобы можно было обновить значение
    // remainingLetters
};
var showAnswerAndCongratulatePlayer = function (answerArray) {
    showPlayerProgress(answerArray);
    alert("Отлично! Было загадано слово " + answerArray.join(""));
    // С помощью alert показывает игроку отгаданное слово 
    // и поздравляет его с победой
};




// word: загаданное слово
var word = pickWord();
// answerArray: итоговый массив
var answerArray = setupAnswerArray(word);


// remainingLetters: сколько букв осталось угадать
var remainingLetters = word.length;

while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    // guess: ответ игрока
    var guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите одиночную букву.");
    } else {

        // correctGuesses: количество открытых букв
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
}
showAnswerAndCongratulatePlayer(answerArray);