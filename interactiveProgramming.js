let couter = 1;
let printMassage = function () {
    console.log('ты уже смотришь в консоль ' + couter + ' сек');
    couter++;
};
let intervalId = setInterval(printMassage, 5000);
// clearInterval(intervalId);
intervalId();
