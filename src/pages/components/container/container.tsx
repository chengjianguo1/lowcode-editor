import React, { PropsWithChildren } from 'react';
import { Props } from '../interface';
import './index.less';

export default function Container(props: PropsWithChildren<Props>) {
  const { children, style, classNames, config, extra, ...rest } = props;

  return (
    <div className="container-config" style={style}>
      Container
    </div>
  );
}
