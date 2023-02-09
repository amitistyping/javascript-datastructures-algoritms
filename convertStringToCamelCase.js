//Convert string to camel case

/**
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing.
 * The first word within the output should be capitalized only if the original word was capitalized
 * (known as Upper Camel Case, also often referred to as Pascal case).
 * The next words should be always capitalized.
 * Examples
 * "the-stealth-warrior" gets converted to "theStealthWarrior"
 * "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
 */

/**
 * questions:
 * 1. Will we always receive string with multiple words i.e. is just a single word e.g. "The" acceptable parameter
 */

function toCamelCase(str) {
	if (!str) return '';
	let finalStrArr = [];
	const splitStrArr = str.split(/[_-]+/);

	// const finalStrArr.push(splitStrArr)

	for (let i = 0; i < splitStrArr.length; i++) {
		let capitalizedString = splitStrArr[i][0].toUpperCase();
		for (let j = 1; j < splitStrArr[i].length; j++) {
			capitalizedString += splitStrArr[i][j];
		}
		finalStrArr.push(capitalizedString);
	}
	// console.log(finalStrArr[0][0], splitStrArr[0][0])
	// console.log(!(finalStrArr[0][0] === splitStrArr[0][0]))
	if (!(finalStrArr[0][0] === splitStrArr[0][0])) {
		console.log(!(finalStrArr[0][0] === splitStrArr[0][0]));
		finalStrArr[0][0] = finalStrArr[0][0].toLowerCase();
	}
	return finalStrArr.join('');
}

console.log(toCamelCase('the_stealth_warrior'));
console.log(toCamelCase('The-Stealth-Warrior'));
console.log(toCamelCase('A-B-C'));
