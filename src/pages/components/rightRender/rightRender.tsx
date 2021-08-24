import React, { PropsWithChildren } from 'react';
import { Props } from '../interface';
import './index.less';

export default function RightRender(props: PropsWithChildren<Props>) {
  const { children, style, classNames, config, extra, ...rest } = props;

  return (
    <div className="right-config" style={style}>
      RightRender
    </div>
  );
}
