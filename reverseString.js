/**
 * Reverse the provided string and return the reversed string.
 * For example, "hello" should become "olleh".
 */

//Solution 1 using array.reverse
function reverseStrWithArrRev(str) {
	return str.split('').reverse().join('');
}

reverseStrWithArrRev('hello');

//Solution 2 split and loop then join

function revStrWithArrLoop(str) {
	const strSplit = str.split('');
	let reversedStr = '';
	for (let i = strSplit.length - 1; i >= 0; i--) {
		reversedStr += strSplit[i];
	}
	return reversedStr;
}

//Solution 3 using spread operator

function revStrWithSpread(str) {
	return [...str].reverse().join('');
}
