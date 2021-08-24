import React, { PropsWithChildren } from 'react';
import { Input } from 'antd';

import { InputComProps } from '../../components/interface';

export default function TextCom(props: PropsWithChildren<InputComProps>) {
  const { children, text, style, ...rest } = props;

  return (
    <div style={style} {...rest}>
      {text}
    </div>
  );
}
