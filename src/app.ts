import runLog from "./modules/Base";
import { Demo } from "./modules/ClassType";
const count: number = 123;
const demo = Demo.getInstance();
console.log(count, demo.name, runLog());