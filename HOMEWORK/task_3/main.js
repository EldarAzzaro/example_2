// №9
// var tribes = [
// 	'Targaryen',
// 	'Stark',
// 	'Lannister',
// 	'Baratheon',
// 	'Greyjoy'
// ];
// // удаление первого элемента массива
// tribes.shift()
// "Targaryen"

// // удаление последнего элемента массива
// tribes.pop()
// "Greyjoy"


// №10  (циклы)


// var i;
//   for(i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//       console.log('четное число' + '=' + i);
//     }
//   }

// выводит результат на странице браузера
  // document.write("<br><b>чётное число</b> = " + i);

// №11
  // for( var i = 1; i < 100; i++) {
  //   if (i % 3 == 0 && i % 5 == 0) {
  //     console.log('fizzbuzz');
  //   } else if (i % 5 == 0) {
  //     console.log('buzz');
  //   } else if (i % 3 == 0) {
  //     console.log('fizz');
  //   } else {
  //     console.log(i);
  //   }
  // }

// let arrFizzbuzz = [];
//   for( var i = 1; i < 100; i++) {
//     arrFizzbuzz.push(i)
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log('fizzbuzz');
//     } else if (i % 5 == 0) {
//       console.log('buzz');
//     }else if (i % 3 == 0) {
//       console.log('fizz');
//     } else {
//       console.log(i);
//     }
//   }



// №12
// var student = { 
//     name : 'David',
//    sClass : 'VI',
//     age: 12 
// }

// console.log(student.name);



// №13
// let r = +prompt('Задайте радиус');
// let p = 3.14;
// let s = p * r**2;                   Math.pow
// let perimeter = 2*p*r;

// alert('площадь круга' + '=' + s + '\n' 
//   + 'периметер' + '=' + Math.floor(perimeter));

// №14

// let word = prompt('Введите слово');
// const arr = [];

// for (let x = 0; x <= word.length; x++) {
//   for (let y = x+1; y <= word.length; y++){
//     arr.push(word.slice(x,y));
//   }
// }

// console.log(arr);


// let arr = [
//   ['a','b','c'],
//   ['d','e','f'],
//   ['g','h','i'],
// ];

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i][arr.length-1-i]);
// }


// TASK-4
// в методе .sort  (a-b)-по возрастанию {сравнивает с 0}
//                 (b-a) - по убыванию  выводит элементы в массиве

// let arrCountries = ['Kyrgyzstan','Russia','Kuba','Spain'];

//  arrCountries.sort(function(a,b) {
//   return a.length - b.length
// });

// console.log(arrCountries);

// №18
// let firstNumber = +prompt('От первого числа');
// let secondNumber = +prompt('До последнего числа');

//  const range = function(a,b){
//   let arr = [];
//   for(let i = a; i <= b;i++){
//     arr.push(i);
//   }return arr
//  }

//  alert(range(firstNumber,secondNumber));


// №17

let factorial = +prompt('Введите число');

const factorialArr = function(a){
  let number = 1;
  for(let i = 1; i<=a; i++){
    number*=i;
  }return number 
}

alert(factorialArr(factorial));
