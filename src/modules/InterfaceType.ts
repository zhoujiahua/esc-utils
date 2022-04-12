interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
  getUserName(): string;
  setUserName(name: string): void;
}

interface Teacher extends Person {
  teach(): string;
}

interface SayHistory {
  (word: string): string;
}

const sayHello: SayHistory = (word) => {
  return word;
};

const getUserName = (person: Person): string => {
  return person.name;
};

const setUserName = (person: Teacher, name: string): void => {
  person.name = name;
};

const userInfo = {
  name: "jerry",
  age: 18,
  sex: "male",
  getUserName() {
    return this.name;
  },
  setUserName(name: string) {
    this.name = name;
  },
  teach() {
    return this.name;
  },
};

getUserName(userInfo);
setUserName(userInfo, "tom");

export class User implements Person {
  name = "John";
  getUserName() {
    return this.name;
  }

  setUserName(name: string) {
    this.name = name;
  }
}
