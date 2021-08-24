import React, { PropsWithChildren } from 'react';
import { ImageComProps } from '../../components/interface';

export default function ImageCom(props: PropsWithChildren<ImageComProps>) {
  const { children, url, style, ...rest } = props;

  return (
    <>
      <img src={url} style={style} {...rest} />
    </>
  );
}
