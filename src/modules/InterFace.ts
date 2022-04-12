interface Point {
  name: string;
  age: number;
}

interface Cps {
  title: string;
  color: string;
  size: number;
  getInfo: () => void;
}

export const point: Point = {
  name: "jerry",
  age: 18,
};

export class Car implements Cps {
  title = "Car";
  color = "Red";
  size = 1530;
  constructor(title: string, color: string, size: number) {
    this.title = title;
    this.color = color;
    this.size = size;
  }
  getInfo() {
    console.log(this.title, this.color, this.size);
  }
}
