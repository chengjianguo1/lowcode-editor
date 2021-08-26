import { UserConfig } from '@/pages/userConfig';
import { DragEvent, ReactNode } from 'react';
import { createBlock, createUid } from '../../utils/createBlock';

export interface LeftRegistComponentMapItem {
  name: string;
  component: string | any;
  type: string;
  // ?
  img?: string;
  imgCustom?: ReactNode;
  displayName?: string;
  urlFn?: () => Promise<any>;
}

let currentDrag: LeftRegistComponentMapItem | null = null;
export const dragEventResolve = function (item: LeftRegistComponentMapItem) {
  return {
    draggable: true,
    onDragStart: () => {
      currentDrag = item;
      //   console.log(item);
    },
    onDragOver: (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
    },
    onDrop: () => {},
    onDragEnd: () => {},
  };
};

export const dragContainerEventResolve = function (
  config: UserConfig | undefined,
) {
  // todo 查找组件模版
  //   console.log(config?.registComponents.getRegistComponents());
  const registComponentMap = config?.registComponents.getRegistComponents();
  return {
    draggable: true,
    onDragStart: () => {},
    onDragOver: (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
    },
    onDrop: (e: DragEvent<HTMLDivElement>) => {
      // 要做的事 查找模版 模版在编辑区的位置 把模版添加到编辑区
      const offsetX = Math.round(e.nativeEvent.offsetX);
      const offestY = Math.round(e.nativeEvent.offsetY);
      //   console.log(offsetX, offestY);
      if (currentDrag) {
        const registComponent =
          registComponentMap && registComponentMap[currentDrag.type];
        // console.log(registComponent);
        if (registComponent) {
          const block = createBlock({
            type: currentDrag.type,
            component: registComponent,
            id: createUid(),
            focus: false,
            startX: offsetX,
            startY: offestY,
            props: {
              // url: 'https://img.alicdn.com/imgextra/i3/O1CN01UfX9Vf1VJ2iJR2dAF_!!6000000002631-2-tps-572-522.png',
              url: 'https://rex-multimedia-pre.oss-cn-hangzhou.aliyuncs.com/extra/media/images/21f3a4cf-e404-46e5-9cc9-66384a5c3abc.png',
              text: '文本',
              draggable: true,
              left: offsetX,
              top: offestY,
              style: {
                background: '',
                position: 'absolute',
                left: offsetX,
                top: offestY,
                width: currentDrag.type === 'image' ? '100px' : 'auto',
                height: currentDrag.type === 'image' ? '100px' : 'auto',
              },
            },
          });
          config?.setStoreData(block);
          console.log(config?.getStoreData());
          config?.forceUpdate();
        }
      }
      currentDrag = null;
    },
    onDragEnd: () => {},
  };
};
