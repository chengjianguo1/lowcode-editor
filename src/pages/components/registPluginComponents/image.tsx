import { UserConfig } from '@/pages/userConfig';
import React, { PropsWithChildren, useRef } from 'react';
import { ImageComProps } from '../../components/interface';

interface IConfig {
  config: UserConfig;
  id: string;
  type: string;
}

export default function ImageCom(
  props: PropsWithChildren<ImageComProps & IConfig>,
) {
  const { children, url, id, config, style, ...rest } = props;
  console.log(props, 'props');

  return (
    <>
      <img
        src={url}
        style={style}
        {...rest}
        onClick={() => {
          console.log(id);
          // todo 找到当前焦点元素
        }}
      />
    </>
  );
}
