import Cookies from "js-cookie";

export default class WebCookie {
  constructor() {}

  // Register VM method
  static install(vm) {
    vm.prototype["$wc"] = this;
  }

  static _extension(ext = {}) {
    ext.expires = ext.expires || 7;
    ext.path = ext.expires || "/";
    ext.domain = ext.domain || "/";
    ext.secure = ext.secure || false;
    return ext;
  }

  static setCookie(name, value, ext = {}, space = false) {
    if (!name) return false;
    ext = this._extension(ext);
    if (!space) return Cookies.set(name, value, ext);
    let spaceCookie = Cookies.noConflict();
    return spaceCookie.set(name, value, ext);
  }

  static getCookie(name) {
    if (!name) return false;
    let data = Cookies.get(name) || "";
    if (
      (data.includes("{") && data.includes("}")) ||
      (data.includes("[") && data.includes("]"))
    )
      return JSON.parse(data);
    return data;
  }

  static removeCookie(name, ext = {}) {
    if (!name) return false;
    ext = this._extension(ext);
    return Cookies.remove(name, ext);
  }
}
