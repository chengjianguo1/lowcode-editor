import { UserConfig } from '@/pages/userConfig';
import React, { PropsWithChildren, useRef } from 'react';
import { ImageComProps } from '../../components/interface';

interface IConfig {
  config: UserConfig;
}

export default function ImageCom(
  props: PropsWithChildren<ImageComProps & IConfig>,
) {
  const { children, url, config, style, ...rest } = props;

  return (
    <>
      <img src={url} style={style} {...rest} />
    </>
  );
}
