import React, {
  AllHTMLAttributes,
  CSSProperties,
  ReactNode,
  DOMAttributes,
} from 'react';
import { UserConfig } from '../userConfig';

export interface Props extends AllHTMLAttributes<HTMLDivElement> {
  config: UserConfig;
  classNames?: string;
  style?: CSSProperties;
  extra?: ReactNode;
}

export interface ImageComProps {
  style?: CSSProperties;
  url?: string;
}

export interface InputComProps {
  style?: CSSProperties;
  text?: string;
}

export interface IConfig {
  config: UserConfig;
  id: string;
  type: string;
  focus: boolean;
  index: number;
  blockEvent: any;
}
