import { Store } from '../store';
import { RegistComponents } from '../registComponents';

export class UserConfig {
  public store = new Store();
  public registComponents = new RegistComponents();
  constructor() {}

  getStoreData() {
    return this.store.getBlocksData();
  }

  getCurrentIndex() {
    return this.store.current;
  }

  getBlock() {
    return this.store.getIndexBlock();
  }

  forceUpdate() {
    this.store.forceUpdate();
  }

  setForceUpdate(fn: Function = () => {}) {
    this.store.setForceUpdate(fn);
  }

  setStoreData(block: any) {
    this.store.setData(block);
  }
}
