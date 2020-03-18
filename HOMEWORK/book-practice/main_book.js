// КНИГА
// var highFives = 0;
// ++highFives;
// ++highFives;
// --highFives;

// var highFives = 0;
// highFives++;
// highFives++;

// highFives++
// 1
// highFives
// 2
// ++highFives
// 3
// highFives
// 3

// var balloons = 100;
// balloons *= 2;

// var java = "Java";
// var script = "Script";

// var javascript = java + script;
// javascript.length;

// java[2]
// "v"

// var codeWord1 = "обернись";
// var codeWord2 = "неужели";
// var codeWord3 = "огурцы";
// var codeWord4 = "липкие";
// var codeWord5 = "?!";
// codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];

// var longString = "Эта длинная строка такая длинная";
// // longString.slice(4, 18);

// longString.toUpperCase("Эта длинная строка такая длинная");

// пошаговый код
// var string = 'эЙ, кАК деЛа?';

// var lowerString = string.toLowerCase();

// var firstCharacter = lowerString[0];

// var firstCharacterUpper = firstCharacter.toUpperCase();

// var restOfString = lowerString.slice(1);

// firstCharacterUpper + restOfString;


// чтение этого кода сложнее
// var string = 'эЙ, кАК деЛа?';

// string[0].toUpperCase() + string.slice(1).toLowerCase();


// var age = 11;
// var accompanied = true;

// let arr = [1, 0, 0, 2, 3, 4, 0, 0, 0];

// for(i = 0; i < arr.length; i++){
// 	if(arr[i] === 0){
// 		arr.splice(i, 1);
// 		arr.push(0);
// 	  }
// 	} 
// 	console.log(arr);




// через метод filter
// let arr = [1, 0, 0, 2, 3, 4, 0, 0, 0];

// let arrSecond = arr.filter(number => number !== 0);
// let arrThird = arr.filter(number => number === 0);

// console.log(arrSecond + ',' + arrThird);

// let word = prompt('Введите слово');
// const arr = [];

// for (let x = 0; x <= word.length; x++) {
// 	for (let y = x+1; y <= word.length; y++){
// 		arr.push(word.slice(x,y));
// 	}
// }

// console.log(arr);

// var dinosaurs = [];
// dinosaurs[0] = "Тираннозавр";
// dinosaurs[1] = "Велоцираптор";
// dinosaurs[2] = "Стегозавр";
// dinosaurs[3] = "Трицератопс";
// dinosaurs[4] = "Брахиозавр";
// dinosaurs[5] = "Птеранодон";
// dinosaurs[6] = "Апатозавр";
// dinosaurs[7] = "Диплодок";
// dinosaurs[8] = "Компсогнат";

// dinosaurs[33]= "Филоцераптор";


// var dinosaursAndNumbers = [3, "динозавры", ["трицератопс", 
// "стегозавр", 3627.5], 10];

// var maniacs = ['Якко', 'Вакко', 'Дот'];

// var animals=[];

// animals.push('Кот');
// animals.push('Валера');

// var furryAnimals=['Альпака','Кольцехвостый лемур','Йети'];

// var scalyAnimals=['Удав','Годзила'];

// var furryAnimalsAndScalyAnimals=furryAnimals.concat(scalyAnimals);

// var owedMoney = {};

// owedMoney["Джимми"] = 5;
// owedMoney["Валерв"] = 30;
// owedMoney["Медран"] = 20;


// var movies = {
// 	'В поисках немо':{
// 		releaseDate: 2003,
// 		duration: 100,
// 		actors:['Альберт','Валера'],
// 		format: 'DVD',
// 	}
// }

// var scores = {};

// scores['Артем'] = 10+'pt';
// scores['Женя'] = 20+'pt';

// var crazyObject = {
// 	'name':'Нелепый обьект',
// 	'some array': [7,9,{purpose: 'путанница', number:123}, 3.3],
// 	'random animal':'Банановая акула'
// }

// var animals = ['Кот','Рыба','Орел','Лев','Енот'];

// for(var i = 0; i < animals.length; i++){
// 	console.log(animals[i] + " - прекрасное животное.")
// }

// var alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

// var randomSymbol = Math.floor(Math.random()*alphabet.length);

// var randomString = "";

// while(randomString.length < 6){
// 	console.log(randomString += alphabet[randomSymbol]);
// 	randomString.length++;
// }

// var input = "javascript is awesome";
// var output = "";
// let translator = {
// 	"a":"4",
// 	"s":"5",
// 	"e":"3"
// };

// for(var i = 0; i < input.length; i++){
// 	let letter = translator[input[i]];
// 	if (letter!==undefined){
// 		output += letter
// 	}else{
// 		output += input[i]
// 	}
// }
// console.log(output);

// var input = 'javascript is awesome';
// var output = '';
// for(let i = 0; i < input.length; i++){
// 	if(input[i]=== 'a') {
// 		output += '4';
// 	}else if(input[i]=== 's'){
// 		output += '5';
// 	}else if(input[i]=== 'e'){
// 		output += '3';
// 	}else{
// 		output += input[i]
// 	}
// }

// console.log(output);

// var input = 'javascript is awesome';
// var output = '';
// for(let i = 0; i < input.length; i++){
// 	switch (input[i]){
// 		case 'a': 
// 			output+="4";
// 		break;
// 		case 'l': 
// 			output+="1";
// 		break;
// 		case 'e': 
// 			output+="3";
// 		break;
// 		default: 
// 			output+=input[i]
// 	}
// }


// console.log(output);


// var input = 'javascript is awesome';
// var output = input.replace(/a/gi,'4')

// console.log(output);
// output = output.replace(/e/gi,'3')

// console.log(output);
// output = output.replace(/s/gi,'5')

// console.log(output);

