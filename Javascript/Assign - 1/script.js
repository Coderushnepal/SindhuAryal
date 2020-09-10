console.log(' ----------Ans 1----------\n');

function starPattern(str) {
	let result = '';
	for (let i = str; i >= 1; i--) {
		for (let j = 1; j <= i; j++) {
			result = result.concat(' *');
		}
		result = result.concat('\n');
	}
	return result;
};

console.log(starPattern(5));
console.log(' \n \n');



console.log(' ----------Ans 2----------  \n');

function censorFour(str) {
	let result = '';
	exp = str.split(' ');  //here ' ' creates space between 2 words and '' creates space between each letters
	for (i = 0; i < exp.length; i++) {
		var count = exp[i].length;
		if (count > 4) {
			result = result + '*'.repeat(count) + ' ';  //The code is + *.5+ '' => The code is *****
		} else {
			result = result + exp[i] + ' ';             //1st eg:  ''+The+' ' + 
		}
	}
	return result;
};

console.log(censorFour('The code is fourty'));
console.log(censorFour('Two plus three is five'));
console.log(censorFour('aaaa aaaaa 1234 12345'));
console.log(' \n \n');


console.log(' ---------- Ans 3----------  \n');

function toArray(obj) {
	let keys = Object.keys(obj);  // three ways to convert object to array Object.keys(), Object.values(), and Object.entries().
	let count = keys.length;
	let arr = [];
	for (let i = 0; i < count; i++) {
		arr.push([ keys[i], obj[keys[i]] ]);  //eg: { a: 1, b: 2 }  :: keys[i] - a,b and obj[keys[i]] - 1,2
	}
	return arr;
}

console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ shrimp: 15, tots: 12 }));
console.log(toArray({}));
console.log(' \n \n');


console.log(' ---------- Ans 4----------  \n');
// function identicalFilter(arr) {
// 	// Do not test the first array element, as you have nothing to compare to
// 	if (arr.length === 0) {
// 		return [];
// 	  }
// 	 // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// 	 //The reduce() method reduces the array to a single value.  (from left-to-right).

// 	  return arr.reduce((acc, curr) => {
// 		let firstChar = curr.charAt(0);
// 		 //do each array element value match the value of the previous array element
		 
	
// 		let isSame = curr.split('').every(item => item === firstChar); //array.every(function(currentValue, index, arr), thisValue)
// 		// console.log(isSame);
// 		if (isSame) {
// 		  acc.push(curr)
// 		}
// 		return acc;
// 	  }, [])
// }

function identicalFilter(arr) {
	let identical = [];
	let count = 0;
	for (i = 0; i < arr.length; i++) {
		let repeatation = new Set(arr[i]);  
		//set le jaile pani unique value matra store garcha, i.e. set ma kailay pani repetation hunna, 
		//ani 999 set() ma gako wala case ma, i.e same number set ma gako case ma, sadhai set vitra 1ota matra 9 baschha
		// vanaypachhi ta tyo set ko size ta sadhai 1 nai bhayo ni ta
		// tara 545 number bhako case ma
		// set ko size 2 hunchha, 5 ani 4 janchha set() vitra
		// tei bhayera set() size 1 hune bhanayko repetation check bhayo
		if (repeatation.size === 1) {
			identical[count++] = arr[i];
		}
	}
	return identical;
}

console.log(identicalFilter( ['88', '999', '22', '545', '133']) );
console.log(identicalFilter( ['xxxxo', 'oxo', 'xox', 'ooxxoo', 'oxo']) );
console.log(' \n \n');



console.log(' ---------- Ans 5----------  \n');
function keysAndValues(obj){
	let keys = Object.keys(obj);			//keys
	keys.sort();
	let result = [];
	for (i = 0; i < keys.length; i++) {
		result[i] = obj[keys[i]];  			//values
	}
	return [ keys, result ];
};

console.log( keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }) ); 
console.log( keysAndValues({ a: 1, b: 2, c: 3 }) ); 
console.log( keysAndValues({ key1: true, key2: false, key3: undefined }) );

