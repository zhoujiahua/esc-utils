import { v4 } from "uuid";
import { point, Car } from "./InterFace";
type RunLog = () => boolean;
const currentTime: Date = new Date();

const runLog: RunLog = () => {
  let car: Car = new Car("BMW", "Bule", 1080);
  car.getInfo();
  console.log(v4(), currentTime, point.name, point.age);
  return true;
};

export default runLog;
