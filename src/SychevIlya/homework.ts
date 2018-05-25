type StringNumber = string | number ;
type StringNumberBoolean = string |number| boolean;

const isInArray = (arr: StringNumberBoolean[], ...args: StringNumberBoolean[]): boolean => {
    return args.every((el: StringNumberBoolean) => arr.indexOf(el) > -1);
};

const summator = (...args: StringNumber[]): number => {
    let sum = 0;
    args.forEach((el: StringNumber) => {
        const digit: number = typeof el === 'string' ? Number(el) : el;
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

const getUnique = (...args: StringNumberBoolean[]): StringNumberBoolean[] => {
    return args.reduce((result: StringNumberBoolean[], el: StringNumberBoolean) => {
        const isUnique = result.indexOf(el) === -1;
        if (isUnique) {
           return result.concat(el);
        }
        return result;
    }, []);
};

// Сделано без учета спецсимволов
const reversWords = (str: string): string => {
    return str.split(' ').map((word: string ) => {
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
