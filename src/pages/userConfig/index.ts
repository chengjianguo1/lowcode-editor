import { Store } from '../store';
import { RegistComponents } from '../registComponents';

export class UserConfig {
  public store = new Store();
  public RegistComponents = new RegistComponents();
  constructor() {}

  getStoreData() {
    return this.store.getData();
  }
}
