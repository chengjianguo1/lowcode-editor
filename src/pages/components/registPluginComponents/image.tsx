import { UserConfig } from '@/pages/userConfig';
import React, { PropsWithChildren, useState, useRef } from 'react';
import classnames from 'classnames';

import ResizeBlock from './resizeHandle';
import { ImageComProps } from '../../components/interface';
import './index.less';

interface IConfig {
  config: UserConfig;
  id: string;
  type: string;
  index: number;
  blockEvent: any;
  focus: boolean;
}

export default function ImageCom(
  props: PropsWithChildren<ImageComProps & IConfig>,
) {
  const {
    children,
    url,
    id,
    config,
    blockEvent,
    index,
    style,
    focus,
    ...rest
  } = props;
  const domRef = useRef(null);
  // console.log(props, 'props');

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
      <img
        src={url}
        style={{
          // objectFit: 'contain',
          height: style?.height + 'px',
          width: style?.width + 'px',
        }}
        {...rest}
        // onClick={() => {
        //   console.log(id, domRef);
        //   // todo 找到当前焦点元素
        // }}
      />
      <ResizeBlock {...{ config: config, index: index }} />
    </div>
  );
}
