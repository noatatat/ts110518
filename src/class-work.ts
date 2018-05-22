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
// interface IName {
//   readonly firstName: string;
// }
//
// interface IAge {
//   readonly age: number;
// }
//
// interface IAccount extends IName, IAge {}
//
// let person1: IAccount;
// let person2: IAccount;
//
// class A implements IAccount {
//   public readonly firstName: string = 'asd';
//   public readonly age: number = 1;
// }
// type Account = {
//   readonly firstName: string,
//   readonly age: number,
// };
// let account: Account;
//
// let account1: Account;

// let account2: Account;
// let s: ReadonlyArray<string | null> = ['asd', 'asd'];

// interface IName<T> {
//   readonly _id: T;
//   readonly firstName: string;
// }
//
// let person: IName<number> = {
//   _id: '1',
//   firstName: 'Igor',
// };
// let person1: IName<string>;

// interface IAccount<MyType extends { firstName: string, age: number }, U> {
//   id: U;
//   info: MyType;
// }
//
// let person: IAccount<{ firstName: string, age: number, male: boolean }, string>;
//
// function f(c: number, ...a: number[]): number {
//   return 1;
// }
//
// f(1, 2);

// function isString(c: string | number): c is string {
//   return typeof c === 'string';
// }
//
// function f(a: number): number;
// function f(a: string, b: number): string;
// function f(a: string | number, b?: number): string | number {
//
//   let count = 0;
//   // loop
//   if (isString(a)) {
//     count += parseInt(a, 10);
//   } else {
//    // a.
//   }
//   parseInt(a, 10);
//
//
//   return 1;
// }
//
// f('1', 2);

abstract class SuperPoint {
  public x!: number;

  public abstract setY(): void;

  public setX() {
    this.x = 1;
  }
}

class Point extends SuperPoint {
  public x!: number;
  protected y!: number;
  private z!: number;

  constructor() {
    super();

  }

  public setY(): void {
    this.y = 3;
  }
}

let a = new Point();

class P extends Point {
  constructor() {
    super();
    this.
  }
}