// 1)
// Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//     Возвращает true, если все аргументы, кроме первого входят в первый.
//     Первым всегда должен быть массив.

function isInArray(arr: (string|number|boolean)[], ...obj: string|number|boolean): boolean {
    let result = true;
    obj.forEach((o) => {
        if (!arr.includes(o)) {
            result = false;
        }
    });
    return result;
}

// 2)
// писать функцию summator(), которая сумирует переданые ей аргументы.
//     Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

function summator(...args: string|number): string|number {
    let result;
    args.forEach((arg) => {
       result = result ? result + arg : arg;
    });
    return result;
}

// 3)
// Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//     и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//     Порядок элементов результирующего массива должен совпадать с порядком,
//     в котором они встречаются в оригинальной структуре.

function getUnique(...args: string|number|boolean): (string|number|boolean)[] {
    const result = [];
    args.forEach((arg) => {
       if (!result.includes(arg)) {
           result.push(arg);
       }
    });
    return result;
}

// 4)
// Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
// цифры и специальные символы должны остаться на месте
// s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
// s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
// s1tar3t 2   low5  ->  t1rat3s 2   wol5

function flipWords(statetement: string): string {
    let result = [];
    let parts = statetement.split(' ');
    parts.forEach((part) => {
        let flip = [];
        for (let i = 0; i < part.length; i++) {
            if (part[i].toUpperCase() < 'A' || part[i].toUpperCase() > 'Z') {
                flip[i] = part[i];
            } else {
                flip[part.length - i] = part[i];
            }
        }
        result.push(flip.join(''));
    });
    return result.join(' ');
}
