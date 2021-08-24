import React, { PropsWithChildren } from 'react';
import { Input } from 'antd';

import { InputComProps } from '../../components/interface';

export default function InputCom(props: PropsWithChildren<InputComProps>) {
  const { children, text, style, ...rest } = props;

  return (
    <>
      <Input value={text} style={style} {...rest}></Input>
    </>
  );
}
