export default class WebStorage {
  constructor() {}

  // JSON Stringify
  static _dataStringify(data: any = null): any {
    if (!data && typeof data !== "number") return "";
    if (typeof data === "string") return data.toString();
    if (typeof data === "object") return JSON.stringify(data);
    if (typeof data === "number") return Number(data).toString();
    return data;
  }

  // JSON Parse
  static _dataParse(data: any = null) {
    if (!data && typeof data !== "number") return "";
    if (typeof data === "number" || typeof data === "object") return data;
    if (data === "0" || data === "false" || data === "true")
      return JSON.parse(data);
    if (typeof data === "string" && data.includes("{") && data.includes("}"))
      return JSON.parse(data);
    if (typeof data === "string" && data.includes("[") && data.includes("]"))
      return JSON.parse(data);
    return data;
  }

  // Register VM method
  static install(vm: any) {
    vm.prototype["$ws"] = this;
  }

  // Set session storage
  static sessionSet(name: string, data: any) {
    sessionStorage.removeItem(name);
    data = this._dataStringify(data);
    sessionStorage.setItem(name, data);
  }

  // Get session storage
  static sessionGet(name: string) {
    let data = sessionStorage.getItem(name);
    return this._dataParse(data);
  }

  // Remove session storage
  static sessionRemove(name: string) {
    sessionStorage.removeItem(name);
  }

  // Clear all session storage
  static sessionClear() {
    sessionStorage.clear();
  }

  // Set local storage
  static localSet(name: string, data: any) {
    localStorage.removeItem(name);
    data = this._dataStringify(data);
    localStorage.setItem(name, data);
  }

  // Get local storage
  static localGet(name: string) {
    let data = localStorage.getItem(name);
    return this._dataParse(data);
  }

  // Remove local storage
  static localRemove(name: string) {
    localStorage.removeItem(name);
  }

  // Clear all local storage
  static localClear() {
    localStorage.clear();
  }
}
