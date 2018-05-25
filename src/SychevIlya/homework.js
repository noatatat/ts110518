var isInArray = function (arr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args.every(function (el) { return arr.indexOf(el) > -1; });
};
var summator = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    args.forEach(function (el) {
        var digit = typeof el === 'string' ? Number(el) : el;
        sum = sum + digit;
    });
    return sum;
    // Почему то это решение не компилится
    // Type 'string | number' is not assignable to type 'number'.
    // return args.reduce((result: number, el: StringNumber): number => {
    //     const digit: number = typeof el === 'string' ? Number(el) : el;
    //     return result + digit;
    // }, 0);
};
var getUnique = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (result, el) {
        var isUnique = result.indexOf(el) === -1;
        if (isUnique) {
            return result.concat(el);
        }
        return result;
    }, []);
};
// Сделано без учета спецсимволов
var reversWords = function (str) {
    return str.split(' ').map(function (word) {
        return word.split('').reverse().join('');
    }).join(' ');
};
console.log('isInArray');
console.log(isInArray([false, 1, '2'], false, 1, '2'));
console.log('summator');
console.log(summator(1, 2, 3, '4', 5));
console.log('getUnique');
console.log(getUnique(1, 1, false, 3, '4', false, 5, 5));
console.log('reversWords');
console.log(reversWords('asd ewq      ytr'));
