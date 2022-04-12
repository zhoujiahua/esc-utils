//readonly
export class User {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// abstract
abstract class Animal {
  abstract getInfo(): string;
  calculateSum(a: number, b: number): number {
    return a + b;
  }
}

export class Dog extends Animal {
  constructor(public name: string, public age: number, public color: string) {
    super();
  }
  getInfo(): string {
    return this.name + "-" + this.age + "-" + this.color;
  }
}

const dog = new Dog("TD", 2, "red");
dog.calculateSum(10, 11);

// interface
interface Person {
  name: string;
  age: number;
  sex: string;
}

// Teacher
interface Teacher extends Person {
  workRun(): void;
}

// Student
interface Student extends Person {
  homeWork(): void;
}

const teachInfo: Teacher = {
  name: "Teacher",
  age: 18,
  sex: "male",
  workRun() {
    console.log("Teach Work...");
  },
};

const studentInfo: Student = {
  name: "Studnet",
  age: 18,
  sex: "male",
  homeWork() {
    console.log("Home Work...");
  },
};

const getTeachInfo: (info: Teacher) => void = (info) => {
  info.workRun();
};

const getStudentInfo = (info: Student) => {
  info.homeWork();
};

getTeachInfo(teachInfo);
getStudentInfo(studentInfo);
