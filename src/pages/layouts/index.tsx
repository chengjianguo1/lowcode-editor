import { IRouteComponentProps } from 'umi';
import React, { createContext } from 'react';

import { UserConfig } from '../userConfig';

const config = new UserConfig();
export const configContext = createContext<UserConfig>(config);

export default function Layout({ children }: IRouteComponentProps) {
  return (
    <configContext.Provider value={config}>{children}</configContext.Provider>
  );
}
