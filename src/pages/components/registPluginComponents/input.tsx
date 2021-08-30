import React, { PropsWithChildren } from 'react';
import { Input } from 'antd';
import classnames from 'classnames';

import ResizeBlock from './resizeHandle';
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
    <div
      style={{
        ...style,
        height: style?.height + 'px',
        width: style?.width + 'px',
      }}
      className={classnames({
        focus: focus,
        custom_img: true,
      })}
      {...blockEvent(config, index, id)}
    >
      <Input
        className={classnames({
          focus: focus,
          custom_input: true,
        })}
        value={text}
        style={{
          height: style?.height + 'px',
        }}
        {...rest}
        // {...blockEvent(config, index, id)}
      ></Input>
      <ResizeBlock {...{ config: config, index: index }} />
    </div>
  );
}
