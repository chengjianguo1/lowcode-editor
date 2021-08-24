import React, { AllHTMLAttributes, CSSProperties, ReactNode } from 'react';
import { UserConfig } from '../userConfig';

export interface Props extends AllHTMLAttributes<HTMLDivElement> {
  config?: UserConfig;
  classNames?: string;
  style?: CSSProperties;
  extra?: ReactNode;
}
