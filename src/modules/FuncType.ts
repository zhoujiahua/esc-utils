function add(a: number, b: number): number {
  return a + b;
}

const sum = add(1, 2);

function sayHello(): void {
  console.log("Hello!");
}

function errorEmitter(): never {
  throw new Error();
  //   while(true) {}
}

function sodium({ first, second }: { first: number; second: number }): number {
  return first + second;
}
