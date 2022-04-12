import Cookies from "js-cookie";

export default class WebCookie {
  constructor() {}

  // Register VM method
  static install(vm: any): void {
    vm.prototype["$wc"] = this;
  }

  static _extension(ext: any = {}): any {
    ext.expires = ext.expires || 7;
    ext.path = ext.expires || "/";
    ext.domain = ext.domain || "/";
    ext.secure = ext.secure || false;
    return ext;
  }

  static setCookie(name: string, value: any, ext = {}): any {
    if (!name) return false;
    ext = this._extension(ext);
    return Cookies.set(name, value, ext);
  }

  static getCookie(name: string): any {
    if (!name) return false;
    let data = Cookies.get(name) || "";
    if (
      (data.includes("{") && data.includes("}")) ||
      (data.includes("[") && data.includes("]"))
    )
      return JSON.parse(data);
    return data;
  }

  static removeCookie(name: string, ext = {}): any {
    if (!name) return false;
    ext = this._extension(ext);
    return Cookies.remove(name, ext);
  }
}
