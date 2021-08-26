import { CSSProperties } from 'react';
import { nanoid } from 'nanoid';

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
    left: number;
    top: number;
    style: CSSProperties;
    draggable: boolean;
  };
}

export function createUid(name?: string) {
  if (name) {
    return name + '-' + nanoid();
  } else {
    return nanoid();
  }
}

export function createBlock(block: Block) {
  return {
    type: block.type,
    id: block.id,
    component: block.component,
    focus: block.focus,
    props: block.props,
  };
}
