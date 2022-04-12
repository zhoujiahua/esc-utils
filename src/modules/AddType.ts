// 基础类型 null undefined symbol boolean void
const count: number = 123;
const userName: string = "Jerry";
const unquery: boolean = false;
const not: null = null;
const und: undefined = undefined;

// 对象类型
class Person {}
const person: Person = new Person();
export const userInfo: { name: string; age: number } = {
  name: "Jerry",
  age: 18,
};
export const dataArry: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const calculateSum: (a: number, b: number) => number = (a, b) => {
  return a + b;
};

let temp: number | string = 0;
temp = "None";

const func1 = ({ str }: { str: string }) => {
  return parseInt(str, 10);
};

const func2: ({ str }: { str: string }) => number = ({ str }) => {
  return parseInt(str, 10);
};
