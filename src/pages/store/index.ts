import { IStoreData } from './store.interface';

export const initialData: IStoreData = {
  container: {
    width: 375,
    height: 667,
  },
  block: [],
  modalMap: {},
  dataSource: {},
  globalState: {},
  modalConfig: {},
};

export class Store {
  constructor(
    public storeDataList: IStoreData[] = [initialData],
    public listeners: Array<Function> = [],
    public current: number = 0,
    public forceupdate: Function = () => {},
  ) {}

  getData() {
    return this.storeDataList[this.current];
  }

  getCurrent() {
    return this.current;
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
