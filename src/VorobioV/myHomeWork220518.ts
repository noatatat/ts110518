/*--1--*/
type Snb = string | number | boolean;

function isInArray(arr: Array<Snb>, ...args: Array<Snb>): boolean {
  return args.every(item => arr.includes(item));
}

/*--2--*/

function summator(...args: number[]): number;
function summator(...args: string[]): string;
function summator(...args: Array<string | number>): string | number {

  let sum: string | number;
  
  function isArrayofStrings(arr: Array<string | number>): arr is string[] {
    return typeof arr[0] === 'string';
  }

  function isArrayofNumbers(arr: Array<string | number>): arr is number[] {
    return typeof arr[0] === 'number';
  }
  
  if (isArrayofStrings(args)) {
    sum = args.reduce((acc, el) => acc.concat(el), '')
  } 
  
  if (isArrayofNumbers(args)) {
    sum = args.reduce((acc, el) => acc += el, 0)
  }

  return sum;
}

/*--3--*/

function getUnique(...args: Array<Snb>): Array<Snb> {
  return Array.from(new Set(args));
}

/*--4--*/

function reverse(str: string): string {
  let arr = str.split(' ');
  
  function reverseWord(str: string):string {
    let arr = str.split('');
    let newArr: Array<string> = arr.filter(symb => symb.match(/[a-z]/i)).reverse();
      arr.forEach((symb, i) => {
      if (!symb.match(/[a-z]/i)) newArr.splice(i, 0, symb);
    });
    return newArr.join('');
  }

  return arr.map(word => reverseWord(word)).join(' ');
}
