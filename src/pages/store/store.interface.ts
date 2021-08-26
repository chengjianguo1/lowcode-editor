// export interface IBlockType {
//   id: string;
//   name: string;
//   top: number;
//   left?: number;
//   zIndex?: number;
//   position?: 'absolute' | 'relative' | 'fixed' | 'static' | 'sticky';
//   width?: number | string;
//   height?: number | string;
//   display?: 'inline-block' | 'block' | 'inline';
//   focus?: boolean;
//   resize?: boolean;
//   canDrag?: boolean;
//   props: Record<string, any>;
// }
import { CSSProperties } from 'react';

interface Block {
  type: string;
  id: string;
  component: any;
  focus: boolean;
  startX: number;
  startY: number;
  props: {
    text?: string;
    url?: string;
    style: CSSProperties;
    top: number;
    left: number;
  };
}

export interface IStoreData {
  container: {
    width: number;
    height: number;
  };
  block: Array<Block>;
}
