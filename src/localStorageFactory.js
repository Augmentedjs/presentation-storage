import LocalStorage from "./localStorage.js";
import NamespacedLocalStorage from "./namespacedLocalStorage.js";

/**
 * LocalStorageFactory
 * Retrieve a local storage Object
 */
class LocalStorageFactory {
  constructor() {
  };

  /**
   * Get the storage instance
   * @param {boolean} persist Persistance or not
   * @param {string} namespace The namespace of the storage if needed (optional)
   * @returns {LocalStorage} Returns an instance of local storage
   */
  static getStorage(persist, namespace) {
    let ls = null;
    if (namespace) {
      ls = new NamespacedLocalStorage(persist, namespace);
    } else {
      ls = new LocalStorage(persist);
    }
    if (ls && ls.isSupported()) {
      return ls;
    }
    return null;
  }
};

export default LocalStorageFactory;
