// interface IAccount {
//   firstName: string;
//   age: number;
// }
//
// let account = IAccount;

// let account = {
//   age: 32,
//   firstName: 'Igor',
// };
//
// let person: typeof account;
//
// person = {
//   age: 45,
//   firstName: 'Vlad',
// };

// const a: void = undefined;
// let b: number | null  = null;
// b.toFixed();

// const account: {
//   readonly firstName: string,
//   readonly age: number,
// } = {
//   age: 32,
//   firstName: 'asdas',
// };
// account.age = 44;

// let s: ReadonlyArray<string | null> = ['asd', 'asd'];
// s[0] = 'sad';
// s[100] = 'sd';

// let cb1: new (a: string) => number;
// let cb2: { new(a: string): number };
interface IName {
  readonly firstName: string;
}

interface IAge {
  readonly age: number;
}

interface IAccount extends IName, IAge {}

let person1: IAccount;
let person2: IAccount;

class A implements IAccount {
  public readonly firstName: string = 'asd';
  public readonly age: number = 1;
}
