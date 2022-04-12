// 数组 Array
const arrData: (number | string)[] = [1, "red"];
const strArr: string[] = ["jerry", "tom", "lance"];
const undefinedArr: undefined[] = [undefined, undefined, undefined];

// type alis 类型别名
type User = { name: string; age: number };

class Teacher {
  constructor(name: string, age: number) {}
}

const objectArr1: User[] = [{ name: "jerry", age: 18 }];

const objectArr2: Teacher[] = [
  new Teacher("tom", 18),
  { name: "jerry", age: 18 },
];

// 元组 tuple 类型和长度固定
export const teacherInfo: [string, string, number] = ["jerry", "male", 18];

// CSV 文件
export const teacherList: [string, string, number][] = [
  ["jerry", "male", 18],
  ["tom", "male", 18],
  ["lance", "male", 18],
];
