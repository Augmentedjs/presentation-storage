import { AugmentedMap } from "next-core-structures";
import LocalStorage from "./localStorage.js";
import LocalStorageFactory from  "./localStorageFactory.js";

/**
 * NamespacedLocalStorage
 * Retrieve a local storage Object
 * @extends LocalStorage
 */
class NamespacedLocalStorage extends LocalStorage {
  constructor(persist, namespace) {
    super(persist);
    this._ls = LocalStorageFactory.getStorage(persist);
    this._myStore = new AugmentedMap();
    this.namespace = namespace;

    // true = localStorage, false = sessionStorage
    if (this.isSupported() && this.namespace && !persist) {
      this._ls.setItem(this.namespace, JSON.stringify(this._myStore.toJSON()));
    } else if (this.isSupported() && this.namespace && persist) {
      this.getItem(this.namespace);
    }
  };

  /**
   * Is storage supported
   * @returns {boolean} Returns true if supported
   */
  isSupported() {
    return (this._ls && this._ls.isSupported());
  };

  /**
   * Gets an item from storage
   * @param {string} key The key in storage
   * @returns {object} Returns object from storage
   */
  getItem(itemKey) {
    let map = {};
    try {
      map = JSON.parse(this._ls.getItem(this.namespace));
    } catch(e) {
      // TODO: bundle this
      //logger.error("AUGMENTED: Augmented Local Strorage could not parse item map from storage!");
      return null;
    }
    this._myStore.clear();
    this._myStore.marshall(map);

    const item = this._myStore.get(itemKey);

    if (item) {
      // support regular string as well as object
      let ret;
      try {
        ret = JSON.parse(item);
      } catch(e){
        // not JSON
        ret = item;
      }
      return ret;
    }
    return null;
  };

  /**
   * Sets an item to storage
   * @param {string} key The key in storage
   * @param {object} object The data to set
   */
  setItem(itemKey, object) {
    if (!this._myStore) {
      this._myStore = new AugmentedMap();
    }
    this._myStore.set(itemKey, object);
    this._ls.setItem(this.namespace, JSON.stringify(this._myStore.toJSON()));
  };

  /**
   * Removes an item from storage
   * @param {string} key The key in storage
   */
  removeItem(itemKey) {
    this._myStore.remove(itemKey);
    this._ls.setItem(this.namespace, JSON.stringify(this._myStore.toJSON()));
  };

  /**
   * Clears storage for namespace
   */
  clear() {
    this._myStore.clear();
    this._ls.setItem(this.namespace, JSON.stringify(this._myStore.toJSON()));
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
    return this._myStore.size();
  };

  /**
  * Gets the namespaced items as a Map
  * @returns {AugmentedMap} Returns the namespaced storage as Map
  */
  getNamespacedItems() {
    return this._myStore;
  };
};

export default NamespacedLocalStorage;
