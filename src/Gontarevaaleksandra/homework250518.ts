
function isInArray(arr: (string | number | boolean)[],
	...args: (string | number | boolean)[]): boolean {
	let result: boolean = true;
	args.forEach(element => {
		if (arr.indexOf(element) === -1) {
			result = false;
		}
	});
	return result;
}

function summator(...args: (string | number)[]): number {
	let count: number = 0;
	args.forEach(element => {
		if (typeof element === 'string') {
			count += parseInt(element, 10);
		} else {
			count += element;
		}
	})
	return count;
}

function getUnique(...args: (string | number | boolean)[]): (string | number | boolean)[] {
	return Array.from(new Set(args));
}

function revertLetters(str: string) {
	let words: string[] = str.split(' ');
	let resultWords: string[] = [];
	words.forEach(element => {
		let letters = Array.from(element);
		let charactersArray = new Array(letters.length);
		let signsArray = new Array(letters.length);

		letters.forEach((letter, i) => {
			if (validate(letter)) {
				charactersArray.push(letter);
			} else {
				signsArray[i] = letter;
			}
		});
		charactersArray.reverse();

		let j = 0;
		for (let i = 0; i < letters.length; i++) {
			if (!signsArray[i]) {
				signsArray[i] = charactersArray[j];
				j++;
			}
		};

		resultWords.push(signsArray.join(''));

	});


	return resultWords.join(' ');

}

function validate(strValue: string) {
	var objRegExp = /^[a-z\u00C0-\u00ff]+$/;
	return objRegExp.test(strValue);
}
