import React, { PropsWithChildren } from 'react';
import { Props } from '../interface';
import './index.less';

export default function Header(props: PropsWithChildren<Props>) {
  const { children, style, classNames, config, extra, ...rest } = props;

  return (
    <div className="header-config">
      <div>预览</div>
    </div>
  );
}
