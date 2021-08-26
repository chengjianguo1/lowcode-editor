import { IStoreData } from './store.interface';

export const initialData: IStoreData = {
  container: {
    width: 375,
    height: 667,
  },
  block: [],
};

export class Store {
  constructor(
    public storeData: IStoreData = initialData,
    public listeners: Array<Function> = [],
    public current: number = -1,
    public forceupdate: Function = () => {},
  ) {}

  getIndexBlock() {
    return this.storeData.block[this.current];
  }

  getBlocksData() {
    return this.storeData;
  }

  getCurrent() {
    return this.current;
  }

  setData(block: any) {
    this.storeData.block.push(block);
  }

  setBlocks(blocks: any) {
    this.storeData.block = blocks;
  }

  setIndex(num: number) {
    this.current = num;
  }

  setForceUpdate(fn: Function) {
    this.forceupdate = fn;
  }

  forceUpdate() {
    this.forceupdate();
  }

  resetListeners() {
    this.listeners = [];
  }

  emit() {
    this.listeners.forEach((fn) => {
      fn();
    });
  }

  subscribe(listener: Function) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((v) => v !== listener);
    };
  }
}
