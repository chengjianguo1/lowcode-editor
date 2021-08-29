import React, { PropsWithChildren, useMemo, useState } from 'react';
// import {  } from 'antd';
import TextRender from './components/textRender';
import { Props } from '../interface';
import './index.less';

export default function RightRender(props: PropsWithChildren<Props>) {
  const { children, style, classNames, config, extra, ...rest } = props;
  const foreUpdate = useState(0)[1];

  const currentBlock = config.getBlock();

  // console.log(config.getStoreData(), config.getCurrentIndex(), config.getBlock());

  config.store.subscribe(() => foreUpdate((pre) => pre + 1));

  return (
    <div className="right-config" style={style}>
      {currentBlock?.type === 'text' && <TextRender config={config} />}
    </div>
  );
}
