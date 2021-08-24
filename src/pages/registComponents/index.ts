interface ComponentType {
  type: string; // 物料类型
  component: any;
}

export class RegistComponents {
  public componentMap: Record<string, any> = {};
  constructor() {
    this.componentMap = {};
  }

  getComponent(type: string) {
    return this.componentMap[type];
  }

  registComponent(component: ComponentType) {
    this.componentMap[component.type] = component.component;
  }

  getRegistComponents() {
    return this.componentMap;
  }

  resetComponet() {
    this.componentMap = {};
  }
}
