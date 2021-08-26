import React, { PropsWithChildren, useState } from 'react';
import classnames from 'classnames';
import {
  FontSizeOutlined,
  EditOutlined,
  PictureOutlined,
} from '@ant-design/icons';

import { dragEventResolve, LeftRegistComponentMapItem } from '../crossDrag';
import { Props } from '../interface';
import './index.less';

const contentComponentList: Array<LeftRegistComponentMapItem> = [
  { component: FontSizeOutlined, name: '文本', type: 'text' },
  { component: EditOutlined, name: '输入框', type: 'input' },
  { component: PictureOutlined, name: '图片', type: 'image' },
];

export default function LeftRender(props: PropsWithChildren<Props>) {
  const { children, style, classNames, config, extra, ...rest } = props;
  const [currentTab, setCurrentTab] = useState<string>('components');
  // console.log(config?.getStoreData());

  const changeTab = (type: string) => {
    setCurrentTab(type);
  };

  const navRender = () => {
    return (
      <ul>
        <li
          className={classnames({
            active: currentTab === 'components',
          })}
          onClick={() => changeTab('components')}
        >
          组件
        </li>
        <li
          className={classnames({
            active: currentTab === 'layers',
          })}
          onClick={() => changeTab('layers')}
        >
          图层
        </li>
      </ul>
    );
  };

  const contentComponentRender = () => {
    return (
      <div className="content-component-list">
        {contentComponentList.map((item) => {
          return (
            <div className="component-item" {...dragEventResolve(item)}>
              {item.component?.render()}
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="left-config" style={style}>
      <div className="left-nav">{navRender()}</div>
      <div className="left-content">{contentComponentRender()}</div>
    </div>
  );
}
