import Augmented from "augmentedjs-next";
import LocalStorage from "./localStorage.js";
import LocalStorageFactory from  "./localStorageFactory.js";

/**
 * NamespacedLocalStorage
 * Retrieve a local storage Object
 * @class NamespacedLocalStorage
 * @memberof Presentation
 */
class NamespacedLocalStorage extends LocalStorage {
  constructor(persist, namespace) {
    super(persist);
    this._ls = LocalStorageFactory.getStorage(persist);
    this._myStore = new Augmented.Utility.Map();
    this.namespace = namespace;

    // true = localStorage, false = sessionStorage
    if (this.isSupported() && this.namespace && !persist) {
      this._ls.setItem(this.namespace, JSON.stringify(this._myStore.toJSON()));
    } else if (this.isSupported() && this.namespace && persist) {
      this.getItem(this.namespace);
    }
  };

  // public
  isSupported() {
    return (this._ls && this._ls.isSupported());
  };

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

  setItem(itemKey, object) {
    if (!this._myStore) {
      this._myStore = new Augmented.Utility.Map();
    }
    this._myStore.set(itemKey, object);
    this._ls.setItem(this.namespace, JSON.stringify(this._myStore.toJSON()));
  };

  removeItem(itemKey) {
    this._myStore.remove(itemKey);
    this._ls.setItem(this.namespace, JSON.stringify(this._myStore.toJSON()));
  };

  clear() {
    this._myStore.clear();
    this._ls.setItem(this.namespace, JSON.stringify(this._myStore.toJSON()));
  };

  key(i) {
    return this._myStore.key(i);
  };

  length() {
    return this._myStore.size();
  };

  /**
  * Gets the namespaced items as a Map
  * @method getNamespacedItems
  * @memberof NamespacedAugmentedLocalStorage
  * @returns {Augmented.Utility.Map} Returns the namespaced storage as Map
  */
  getNamespacedItems() {
    return this._myStore;
  };
};

export default NamespacedLocalStorage;
