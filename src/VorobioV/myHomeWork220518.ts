function isInArray(arr: Array<string | number | boolean>, ...args: Array<string | number | boolean>): boolean {
  let flag: boolean = true;
  args.forEach(item => {
    if (arr.find(el => el === item) === undefined) flag = false;
  });
  return flag;
}

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
};

