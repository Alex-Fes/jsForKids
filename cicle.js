// let name = 'Alexey';
// if (name === 'Alexey') {
//     console.log('Привет, ', name);
// }
// else {
//     name != 'Alexey';
//     console.log('Привет, незнакомец!');
// }


// for (x = 3; x < 10000; x = x * 3){
//     console.log(x);
// }
// let  y = 3;
// while (y < 10000) {
//     y = y * 3,
//     console.log(y)
// };


// let animals = ['Кот','Тигр','Змея','Слон','Черепаха','Обезьяна'];
// for(i = 0; i < animals.length; i++){
//     animals[i] = animals[i] + ' - прекрасное животное'
// }
// console.log(animals);

// let alfabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// let randomString = [];
// while (randomString.length < 3) {
//     randomString += alfabet[Math.floor(Math.random() * alfabet.length)]
// }
// console.log(randomString);

let input = 'javascript is awesome';
let output = '';
for (let i = 0; i < input.length; i++) {
 
    output += input[i];

    if (input[i] === "a"){
        output = output.replace("a", 4);
    }
    if (input[i] === "e"){
        output = output.replace("e", 3);
    }
    if (input[i] === "i"){
        output = output.replace("i", 1);
    }
    if (input[i] === "o"){
        output = output.replace("o", 0);
    }


} console.log (output);



// var input = "javascript is awesome"; 
// var output = ""; 
// for (i=0; i < input.length; i++){ 
// if (input[i] =="a") { 
// input[i]= "4"; 
// } 
// if (input[i] == "e" ){ 
// input[i] ="3"; 
// } 
// if (input[i] =="i"){ 
// input[i] = "1"; 
// } 
// if (input[i] == "o"){ 
// input[i] = "0"; 
// } 
 
// else { 
// output+= input[i]; 
// } 
// output+= input[i]; 
// console.log(output) 
// }