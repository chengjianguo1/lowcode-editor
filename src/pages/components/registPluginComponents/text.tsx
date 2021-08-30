import React, { PropsWithChildren } from 'react';
import classnames from 'classnames';

import ResizeBlock from './resizeHandle';
import { InputComProps, IConfig } from '../../components/interface';
import './index.less';

export default function TextCom(
  props: PropsWithChildren<InputComProps & IConfig>,
) {
  const {
    children,
    text,
    style,
    blockEvent,
    config,
    index,
    focus,
    id,
    ...rest
  } = props;

  return (
    <div
      style={{
        ...style,
        height: style?.height + 'px',
        width: style?.width + 'px',
      }}
    >
      <div
        className={classnames({
          focus: focus,
          custom_text: true,
        })}
        // style={style}
        {...rest}
        {...blockEvent(config, index, id)}
      >
        {text}
      </div>
      <ResizeBlock {...{ config: config, index: index }} />
    </div>
  );
}
