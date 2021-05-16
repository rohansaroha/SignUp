export default class StorageService {
  static setKey(key, value) {
    localStorage.setItem(key, value);
  }
  static removeKey(key) {
    localStorage.removeItem(key);
  }
  static clearStorage() {
    localStorage.clear();
  }
  static getValueFromKey(key) {
    return localStorage.getItem(key);
  }
}
