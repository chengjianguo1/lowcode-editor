import React, { RefObject } from 'react';
import deepcopy from 'deepcopy';
import { UserConfig } from '@/pages/userConfig';

export const wrapperEvent = (wrapperRef: any, config?: UserConfig) => {
  return {
    onMouseMove(e: React.MouseEvent) {
      e.preventDefault();
      const blocks = config?.getStoreData().block || [];
      const current = config?.store.getCurrent();

      // drag
      if (
        current !== undefined &&
        current > -1 &&
        blocks[current].drag &&
        blocks[current].focus
      ) {
        // 焦点元素
        let { clientX: moveX, clientY: moveY } = e;
        let durX = moveX - blocks[current].startX;
        let durY = moveY - blocks[current].startY;

        let left = durX + blocks[current].props.left;
        let top = durY + blocks[current].props.top;

        blocks[current].props = {
          ...blocks[current].props,
          /* left: left,
          top: top, */
          style: {
            ...blocks[current].props.style,
            left: left,
            top: top,
          },
        };

        const newBlocks = deepcopy(blocks);
        config?.store.setBlocks(newBlocks);
        config?.forceUpdate();
      }
      // resize
      if (
        current !== undefined &&
        current > -1 &&
        blocks[current].resize &&
        blocks[current].focus
      ) {
        // 焦点元素
        console.log(blocks[current].direction, blocks[current].props);
        let { clientX: moveX, clientY: moveY } = e;
        let durX = moveX - blocks[current].startX;
        let durY = moveY - blocks[current].startY;

        let left = blocks[current].props.left;
        let top = blocks[current].props.top;
        let width: any = blocks[current].startWidth;
        let height: any = blocks[current].startHeight;

        // todo 待优化
        if (blocks[current].direction === 'l' && width) {
          width = parseInt(width) - durX;
          left = left + durX;
        }
        if (blocks[current].direction === 't') {
          height = parseInt(height) - durY;
          top = top + durY;
        }

        blocks[current].props = {
          ...blocks[current].props,
          /* left: left,
           top: top, */
          style: {
            ...blocks[current].props.style,
            width: width,
            height: height,
            left: left,
            top: top,
          },
        };

        const newBlocks = deepcopy(blocks);
        config?.store.setBlocks(newBlocks);
        config?.forceUpdate();
      }
    },
    onMouseUp() {
      let blocks = config?.getStoreData().block || [];
      const current = config?.store.getCurrent();
      blocks = blocks.map((block) => {
        return {
          ...block,
          // focus: false,
          resize: false,
          drag: false,
        };
      });
      if (current !== undefined && current > -1) {
        blocks[current].props = {
          ...blocks[current].props,
          left: blocks[current].props.style.left as number,
          top: blocks[current].props.style.top as number,
          style: {
            ...blocks[current].props.style,
          },
        };
      }

      const newBlocks = deepcopy(blocks);
      config?.store.setBlocks(newBlocks);
      config?.forceUpdate();
    },
    onClick() {
      let blocks = config?.getStoreData().block || [];
      const current = config?.store.getCurrent();
      if (current !== undefined && current > -1) {
        blocks[current].props = {
          ...blocks[current].props,
          left: blocks[current].props.style.left as number,
          top: blocks[current].props.style.top as number,
          style: {
            ...blocks[current].props.style,
          },
        };
        blocks[current].drag = false;
        // blocks[current].focus = !blocks[current].focus;
      }

      const newBlocks = deepcopy(blocks);
      config?.store.setBlocks(newBlocks);
      config?.forceUpdate();
      config?.store.emit();
    },
  };
};

export const blockEvent = (
  config?: UserConfig,
  index?: number,
  id?: string,
) => {
  // 查找当前焦点元素
  const blocks = config?.getStoreData().block;
  console.log(id);

  return {
    onMouseDown(e: React.MouseEvent) {
      const blocks = config?.getStoreData().block || [];
      if (index !== undefined && index > -1 && blocks[index]) {
        blocks[index].startX = e.clientX;
        blocks[index].startY = e.clientY;
        console.log(e.clientX, e.clientY);
        blocks[index].focus = true; // 设置焦点
        blocks[index].drag = true;
        config?.store?.setIndex(index);
        config?.store.setBlocks(deepcopy(blocks));
        config?.forceUpdate();
      }
    },
    onMouseOver(e: React.MouseEvent) {
      // 设置hover样式
      e.preventDefault();
      if (e.target.className.indexOf('el-hover') === -1) {
        e.target.className = e.target.className + ' el-hover';
      }
    },
    onMouseLeave(e: React.MouseEvent) {
      e.target.className = e.target.className.replace('el-hover', '');
      // config?.store?.setIndex(-1);
    },
    /* onClick(e: React.TouchEvent) {
      e.preventDefault();
      // 设置焦点样式 找到block, 然后设置block.foucs = true;
      const blocks = config?.getStoreData().block || [];
      // const current = config?.store.getCurrent();
      if (index !== undefined && index > -1 && blocks[index]) {
        blocks[index].focus = true;
      }
      config?.forceUpdate();
    }, */
  };
};
