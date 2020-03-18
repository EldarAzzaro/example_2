// Additional tasks

// №1
let numberArr = [];
for (let i = 0; i <= 100; i++) {
			numberArr.push(i);
	if (i % 3 == 0) {
		console.log('devided by 3');
	} else if (i % 5 == 0){
		console.log('devided by 5');
	}else if (i % 7 == 0){
		console.log('devided by 7');
	}else
	console.log(i);
}

// №2
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