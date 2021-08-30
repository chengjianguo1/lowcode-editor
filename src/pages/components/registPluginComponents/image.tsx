import { UserConfig } from '@/pages/userConfig';
import React, { PropsWithChildren, useState, useRef } from 'react';
import classnames from 'classnames';

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
    <>
      <img
        className={classnames({
          focus: focus,
          custom_img: true,
        })}
        ref={domRef}
        src={url}
        style={{
          ...style,
          height: style?.height + 'px',
          width: style?.width + 'px',
        }}
        {...rest}
        // onClick={() => {
        //   console.log(id, domRef);
        //   // todo 找到当前焦点元素
        // }}
        {...blockEvent(config, index, id)}
      />
    </>
  );
}
