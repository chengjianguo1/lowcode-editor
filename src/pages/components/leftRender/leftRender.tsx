import React, { PropsWithChildren } from 'react';
import { Props } from '../interface';
import './index.less';

export default function LeftRender(props: PropsWithChildren<Props>) {
  const { children, style, classNames, config, extra, ...rest } = props;
  return (
    <div className="left-config" style={style}>
      <div className="left-nav">1</div>
      <div className="left-content">2</div>
    </div>
  );
}
