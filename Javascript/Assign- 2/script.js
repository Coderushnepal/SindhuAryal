console.log('\n\n Answer 1 \n\n');
var listOfNames = `Neeta sapkota
Neha shiwakoti
Srijana Khatiwada 
Smrity Dhakal
Sami Chakradhar
Kirtee Maharjan
Trija Thebe
Sindhu Aryal
Kusum Ranjitkar
Elisha Bista
Rachana kafle
Barsha Maharjan
Pooja Gurung
Bisikha Subedi
Kritika Baral
Srijana Thulung`;
var nameList = listOfNames.split('\n');

var result = nameList.map(function(value, index) {
		var obj = {};
		var name = value.split(' ');
		var firstName = name[0];
		var lastName =	name[1];

		obj['id'] = index + 1;
		obj['firstName']  = firstName[0].toUpperCase().concat(firstName.substring(1));;
		obj['lastName']   = lastName[0].toUpperCase().concat(lastName.substring(1));;
		return obj;
	});

console.log(result);



console.log('\n\n  Answer 2 \n\n');
function find(char) {
    var finder = result.filter(function(value) {
        return value.firstName.charAt(0) === char.toUpperCase();
	});
	return char + ': ' + (finder.length) + ' and ' + (result.length - finder.length);
}

console.log(find('s'));
console.log(find('a'));


console.log('\n\n Answer 3 \n\n');
var final = result.reduce(function(acc,value,index){
	// console.log(value);   value= result ko id, firstName and lastName aauncha
	var storeId = value.id;
	// console.log(storeId);       1,2,3,4,5...........
	delete value.id;				//value.id delete garesi firstName and lastName matraa rahancha
	acc[storeId] = value;			// storedId ma 1,2,3,4 and value ma firstName and lastName
	return acc;
},{});

console.log(final);
