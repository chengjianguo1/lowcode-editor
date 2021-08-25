import React, { PropsWithChildren, useState } from 'react';
import { Props } from '../interface';
import { dragContainerEventResolve } from '../crossDrag';
import { wrapperEvent } from '../crossDrag/targetMove';
import './index.less';

export default function Content(props: PropsWithChildren<Props>) {
  const { children, style, classNames, config, extra, ...rest } = props;
  const storeData = config?.getStoreData();
  const forceUpdate = useState(0)[1];
  config &&
    config.setForceUpdate(() => {
      forceUpdate((pre) => pre + 1);
    });

  console.log(storeData, 'storeData');

  return (
    <div
      className="content-canvas"
      style={style}
      {...dragContainerEventResolve(config)}
    >
      <div
        {...wrapperEvent(config)}
        draggable="true"
        style={{ height: '100%' }}
      >
        {storeData?.block.map((block, index) => {
          return block.component({
            ...block.props,
            config,
            id: block.id,
            type: block.type,
          });
        })}
      </div>
    </div>
  );
}
