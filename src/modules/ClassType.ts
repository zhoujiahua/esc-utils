/**
 * public 类外类内调用
 * private 类内调用
 * protected 类内以及子类调用
 */

export class Person {
  private _secret: string = "";
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  get getSecret() {
    return this._secret + "1q2w3e4r";
  }

  set setSecret(secret: string) {
    this._secret = secret;
  }

  getUserInfo(): string {
    return this.name + this.age;
  }
  setUserInfo(name: string, age: number): void {
    this.name = name;
    this.age = age;
  }
}

export class User extends Person {
  constructor(name: string, age: number, public sex: string) {
    super(name, age);
    this.sex = sex;
  }
  getInfo(): string {
    return super.getUserInfo() + this.sex;
  }
}

// 单例模式
export class Demo {
  private static instance: Demo;
  private constructor(public name: string) {}
  static getInstance(): Demo {
    if (!this.instance) this.instance = new Demo("Jerry Zhou");
    return this.instance;
  }
}
