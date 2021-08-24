export interface IBlockType {
  id: string;
  name: string;
  top: number;
  left: number;
  zIndex: number;
  position: 'absolute' | 'relative' | 'fixed' | 'static' | 'sticky';
  width?: number | string;
  height?: number | string;
  display?: 'inline-block' | 'block' | 'inline';
  focus: boolean;
  resize: boolean;
  canDrag: boolean;
  props: Record<string, any>;
}

export interface IStoreData {
  container: {
    width: number;
    height: number;
  };
  block: Array<IBlockType>;
  modalMap: Record<string, IStoreData>;
  dataSource: Record<string, any>;
  globalState: Record<string, any>;
  modalConfig: Record<string, any>;
}
