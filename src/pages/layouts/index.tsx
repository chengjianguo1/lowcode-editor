import { IRouteComponentProps } from 'umi';
import React, { createContext } from 'react';

import { UserConfig } from '../userConfig';
import ImageCom from '../components/registPluginComponents/image';
import InputCom from '../components/registPluginComponents/input';
import TextCom from '../components/registPluginComponents/text';

const ComponentRegistList = [
  {
    type: 'image',
    component: ImageCom,
  },
  {
    type: 'input',
    component: InputCom,
  },
  {
    type: 'text',
    component: TextCom,
  },
];

const config = new UserConfig();
export const configContext = createContext<UserConfig>(config);

// 注册组件
ComponentRegistList.forEach((comobj) => {
  config.registComponents.registComponent({
    type: comobj.type,
    component: comobj.component,
  });
});

// console.log(config.registComponents.getRegistComponents(), '------');
export default function Layout({ children }: IRouteComponentProps) {
  return (
    <configContext.Provider value={config}>{children}</configContext.Provider>
  );
}
