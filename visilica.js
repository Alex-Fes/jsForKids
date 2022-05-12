// let name = prompt('Как вас зовут?');
// console.log('Привет, ' + name);

// let likeCats = confirm('Тебе нравятся кошки?');
// if(likeCats) {
//     console.log('Ты классная кошка!')
// } else {
//     console.log('Что ж, не проблема. Все равно ты молодец!')
// }
// alert('javascript это збс!');

// Псевдокод для составления плана программы:
// Выбрать случайное слово
// Пока слово не угадано {
//  Показать игроку текущее состояние игры
//  Запросить у игрока вариант ответа
//  Если игрок хочет выйти из игры {
//  Выйти из игры
//  }
//  Иначе Если вариант ответа — не одиночная буква {
//  Сообщить игроку, что он должен ввести букву
//  }
//  Иначе {
//  Если такая буква есть в слове {
//  Обновить состояние игры, подставив новую букву
//  }
//  }
// }
// Поздравить игрока с победой — слово угадано





//создаем массив со словами
let words = ['велосипед', 'лампа', 'автомобиль', 'карусель', 'магазин', 'макака'];

//вибираем случайное слово
let word = words[Math.floor(Math.random() * words.length)];

//создаем итоговый массив
let answerArray = [];
for (i = 0; i < word.length; i++) {
    answerArray[i] = '_';
}
let remainingLetter = word.length;
let motion = word.length + 2;
let isHit = false;

//игровой цикл
while ((remainingLetter > 0) && (motion > 0)) {
    //показываем состояние игры
    alert(answerArray.join(' '));
    //запрашиваем вариант ответа
    let guess = prompt('Назовите букву или нажмите "Отмена" для выхода из игры');
    guess = guess.toLowerCase();
    //выходим из игрового процесса
    if (guess === null) {
        break;
    }
    else if (guess.length !== 1) {
        alert('Пожайлуста, введите одну букву');
    }
    //обновляем состояние игры
    else {
        isHit = false;//если поставить true, то счетчик будет считать каждый раз , даже если буква была введена
        for (j = 0; j < word.length; j++) {
            let letterWasEntered = answerArray[j] === guess;
            if (letterWasEntered) {
                alert('Вы уже вводили эту букву');
                break;
            }
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetter--;
                isHit = true;
            }
        }
        if (isHit) {
            motion--;
            alert('У вас осталось ' + motion + ' попыток!');
            if (motion === 0) {
                alert('Ваши попытки закончились');
                break;
            }
        }
    }
    //крнец игры

}
//отображаем ответ и поздравляем игрока
alert(answerArray.join(' '));
alert('Отлично, было загадано слово ' + word);

















