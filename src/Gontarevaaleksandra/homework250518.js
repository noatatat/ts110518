"use strict";
function isInArray(arr, ...args) {
    let result = true;
    args.forEach(element => {
        if (arr.indexOf(element) === -1) {
            result = false;
        }
    });
    return result;
}
function summator(...args) {
    let count = 0;
    args.forEach(element => {
        if (typeof element === 'string') {
            count += parseInt(element, 10);
        }
        else {
            count += element;
        }
    });
    return count;
}
function getUnique(...args) {
    return Array.from(new Set(args));
}
function revertLetters(str) {
    let words = str.split(' ');
    let resultWords = [];
    words.forEach(element => {
        let letters = Array.from(element);
        let charactersArray = new Array(letters.length);
        let signsArray = new Array(letters.length);
        letters.forEach((letter, i) => {
            if (validate(letter)) {
                charactersArray.push(letter);
            }
            else {
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
        }
        ;
        resultWords.push(signsArray.join(''));
    });
    return resultWords.join(' ');
}
function validate(strValue) {
    var objRegExp = /^[a-z\u00C0-\u00ff]+$/;
    return objRegExp.test(strValue);
}
