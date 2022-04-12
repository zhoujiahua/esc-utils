// type annotation 类型注解 明确指定类型
// type inference 类型推断 TS自动推断类型

const fisrtNumber = 123;
const secondNumber = 321;
const sumNumber = fisrtNumber + secondNumber;

export function calculateSum(a: number, b: number): number {
  return a + b;
}

const sum = calculateSum(secondNumber, fisrtNumber);
