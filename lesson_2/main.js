// Запись нескольких переменных после единственного объявления
// var firstName = 'Jack', lastName = 'Johnson';
// console.log(firstName, lastName);

// отличия var и let

// var хойстится let не хойстится 
// console.log(firstName);  undefined
// var firstName = 'Jack';
// console.log(firstName);
// let firstName = 'Jack';


// объявление 2х let невозможно

// var firstName = 'Jack';
// var firstName = 'John';
// console.log(firstName);

// let firstName = 'Jack';
// let firstName = 'John';
// console.log(firstName);

// var записывается в глобальный объект window
// var firstName = 'Jack';
// console.log(window.firstName);

// let не записывается в глобальный объект window
// let firstName = 'Jack';
// console.log(window.firstName);

// Переменная объявлена через const унаследовала все принципы которые свойственны переменной let, но с небольшими отличиями

// переназначение let возможно
// let firstName = 'Jack';
// console.log(firstName);
// firstName = 'John';
// console.log(firstName);

// переназначение const невозможно
// const firstName = 'Jack';
// firstName = 'John';
// console.log(firstName);


// ОБЪЕКТЫ

// const person = {
// 	name: 'Jack',
// 	age: 20,
// 	childs: ['John', 'Luci']
// }

// Нестандартные значения ключей
// const notStandartFields = {
// 	'kebab-case': 'i can use it :D',
// 	'0':10
// }

// Доступ к свойствам объекта
// console.log(person.name);
// console.log(notStandartFields['kebab-case']);

// Переназначение свойств джае если это касается константа
// person.name = 'John';
// console.log(person);

// Добавление свойства извне 
// person.weight = '80kg';
// console.log(person);

// Удаление полей в объекте
// delete person.name;
// console.log(person);



// Массивы
// const arrNums = [1,2,3,4,5];
// console.log(arrNums);


// Длинна массива
// console.log(arrNums.length);

// Доступ к первому элементу массива
// console.log(arrNums[0]);

// Доступ к последнему элементу массива
// console.log(arrNums[arrNums.length-1]);

// Переназначение элемента массива
// arrNums[2] = 10;
// console.log(arrNums);


// оператор инкремент
// let num = 0;
// console.log(num++);
// console.log(num);

// Циклы
// for(let i = 0; i <= 100; i++) {
// 	console.log('Итерация №' + i);
// }

// const arrNums = [1,2,3,4,5];

// for(let i = 0; i < arrNums.length; i++) {
// 	// console.log(arrNums [i]);
// 	console.log(arrNums [i] * 2);
// }

// i cчитывает индексы в массиве


// Поиск элементов в массиве циклом с условием 
// let value = null;

// for (let i = 0; i <arrNums.length; i++) {
// 	if (arrNums[i] === 4) value = arrNums[i];
// }

// console.log(value);

// Вытаскиваем  все элементы больше 3х отдельный массив
// const arrNums2 = [];

// for (let i = 0; i < arrNums.length; i++) {
// 	if (arrNums[i] > 3) arrNums2.push(arrNums[i]);
// }

// console.log(arrNums2);

// Цикл while
// let i = 0;

// while (i < 10) {
// 	console.log('Итерация №'+ i++)
// }


// Цикл do while
// let i = 0;

// do {
// 	console.log('Итерация №' + i++);
// } while (i < 10);


// Метод массива stage 1

const someFamily = [
	{
		name: 'March',
		position: 'Mother',
		age: 36
	},
	{
		name: 'Homer',
		position: 'Father',
		age: 40
	},
	{
		name: 'Bart',
		position: 'Son',
		age: 10
	},
	{
		name: 'Lisa',
		position: 'Daughter',
		age: 8
	}
];


// Метод push/ pop 
const newChild = {
	name: 'Maggie',
	position: 'Daughter',
	age:2
}

// someFamily.push(newChild);   добавляет в конец
// someFamily.pop();    убирает из конца
// console.log(someFamily);

// Метод shift/ unshift  удаление-добавление в начале
// someFamily.shift()
// someFamily.unshift(newChild);
// console.log(someFamily);

// Метод splice   удаление splice(индекс,кол элементов)
// someFamily.splice(1, 1);
// console.log(someFamily);

// добавление
// someFamily.splice(2, 0, newChild); 
// console.log(someFamily);

// Узнать про собрата splice. Метод slice

// Жизнь без метода forEach
const simpsonsFamily = [];

// for (let i = 0; i< someFamily.length; i++){
// 	someFamily[i].lastName = 'Simpson';
// 	simpsonsFamily.push(someFamily[i]);
// }

// console.log(simpsonsFamily);


// Жизнь с методом forEach

someFamily.forEach(function(item){
	item.lastName = 'Simpson';
	simpsonsFamily.push(item);
})
console.log(simpsonsFamily);

// Жизнь с методом map
// const simpsonsFamily = someFamily.map(function(item){
// 	item.lastName = 'Simpson';
// 	return item;
// })

// console.log(simpsonsFamily);