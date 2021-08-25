import { CSSProperties } from 'react';
import { nanoid } from 'nanoid';

interface Block {
  type: string;
  id: string;
  component: any;
  props: {
    text?: string;
    url?: string;
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
    props: block.props,
  };
}
