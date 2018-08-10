const isStorageSupported = () => {
  return (typeof (Storage) !== "undefined");
};

/**
 * Local Storage API - returned from LocalStorageFactory
 * @memberof Presentation
 * @param {boolean} persist Persistant storage or not
 */
class LocalStorage {
  constructor(persist) {
    this.isPersisted = persist;
    this._myStore = null;

    // true = localStorage, false = sessionStorage
    if (isStorageSupported()) {
      if (this.isPersisted) {
        this._myStore = localStorage;
      } else {
        this._myStore = sessionStorage;
      }
    } else {
      console.warn("AUGMENTED: No localStorage.");
    }
  };

  /**
   * is Persistant or not
   * @property {boolean} isPersisted Persistant property
   */

  /**
   * Is storage supported
   * @returns {boolean} Returns true if supported
   */
  isSupported() {
    return isStorageSupported();
  };

  /**
   * Gets an item from storage
   * @param {string} key The key in storage
   * @returns {object} Returns object from storage
   */
  getItem(itemKey) {
    const item = this._myStore.getItem(itemKey);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  };

  /**
   * Sets an item to storage
   * @param {string} key The key in storage
   * @param {object} object The data to set
   */
  setItem(itemKey, object) {
    this._myStore.setItem(itemKey, JSON.stringify(object));
  };

  /**
   * Removes an item from storage
   * @param {string} key The key in storage
   */
  removeItem(itemKey) {
    this._myStore.removeItem(itemKey);
  };

  /**
   * Clears storage - <b>Warning: Destructive in non-namespaced instances!</b>
   */
  clear() {
    this._myStore.clear();
  };

  /**
   * Gets the key from storage for index
   * @param {number} i The index in storage
   * @returns {string} Returns the key from storage
   */
  key(i) {
    return this._myStore.key(i);
  };

  /**
   * The length of storage by keys
   * @returns {number} Returns the length of storage by keys
   */
  length() {
    return this._myStore.length;
  };
};

export default LocalStorage;
