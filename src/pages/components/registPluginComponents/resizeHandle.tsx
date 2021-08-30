import React, { PropsWithChildren } from 'react';
import deepcopy from 'deepcopy';
import { directionArr, ITextProps, DirectionType } from './regist.interface';
import './index.less';
import { UserConfig } from '@/pages/userConfig';

let relation = {
  x: 0,
  y: 0,
};

const onmusedown = (
  e: React.MouseEvent,
  index: number,
  config: UserConfig,
  direction: DirectionType,
) => {
  e.preventDefault();
  const { clientX, clientY } = e.nativeEvent;
  console.log(clientX, clientY, direction, 'resize');

  const blocks = config?.getStoreData().block || [];
  if (index !== undefined && index > -1 && blocks[index]) {
    blocks[index].startX = e.clientX;
    blocks[index].startY = e.clientY;
    blocks[index].direction = direction;
    blocks[index].focus = true; // 设置焦点
    //   blocks[index].drag = true;
    //   blocks[index].props.style = {}
    blocks[index].resize = true;
    config?.store?.setIndex(index);
    config?.store.setBlocks(deepcopy(blocks));
    config?.forceUpdate();
  }
};

const onmuseup = (e: React.MouseEvent, index: number, config: UserConfig) => {
  const blocks = config?.getStoreData().block || [];
  if (index !== undefined && index > -1 && blocks[index]) {
    console.log(e, '++++++');

    blocks[index].startHeight = blocks[index].props.style.height;
    blocks[index].startWidth = blocks[index].props.style.width;

    blocks[index].focus = true; // 设置焦点
    blocks[index].resize = false;
    config?.store?.setIndex(index);
    /*  config?.store.setBlocks(deepcopy(blocks));
        config?.forceUpdate(); */
  }
};

export default function ResizeBlock(props: PropsWithChildren<ITextProps>) {
  const { index, config } = props;
  const cursorMap = {
    l: 'w-resize',
    t: 'n-resize',
    b: 's-resize',
    r: 'e-resize',
    lt: 'nw-resize',
    rt: 'ne-resize',
    rb: 'se-resize',
    lb: 'sw-resize',
  };

  return (
    <>
      {directionArr.map((v) => {
        return (
          <div
            style={{ cursor: cursorMap[v] }}
            className={`${v} pointer`}
            onMouseDown={(e) => onmusedown(e, index, config, v)}
            onMouseUp={(e) => onmuseup(e, index, config)}
          ></div>
        );
      })}
    </>
  );
}
