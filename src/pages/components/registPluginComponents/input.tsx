import React, { PropsWithChildren } from 'react';
import { Input } from 'antd';
import classnames from 'classnames';

import { InputComProps, IConfig } from '../../components/interface';
import './index.less';

export default function InputCom(
  props: PropsWithChildren<InputComProps & IConfig>,
) {
  const {
    children,
    text,
    blockEvent,
    config,
    index,
    id,
    style,
    focus,
    ...rest
  } = props;

  return (
    <>
      <Input
        className={classnames({
          focus: focus,
          custom_input: true,
        })}
        value={text}
        style={{
          ...style,
          height: style?.height + 'px',
          widht: style?.width + 'px',
        }}
        {...rest}
        {...blockEvent(config, index, id)}
      ></Input>
    </>
  );
}
