import React, { PropsWithChildren, useState } from 'react';
import classnames from 'classnames';

import { Props } from '../interface';
import './index.less';

export default function LeftRender(props: PropsWithChildren<Props>) {
  const { children, style, classNames, config, extra, ...rest } = props;
  const [currentTab, setCurrentTab] = useState<string>('components');
  console.log(config?.getStoreData());

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

  return (
    <div className="left-config" style={style}>
      <div className="left-nav">{navRender()}</div>
      <div className="left-content">2</div>
    </div>
  );
}
