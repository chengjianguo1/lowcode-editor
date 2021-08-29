import React, { PropsWithChildren, useState, useEffect } from 'react';
import { Input, InputNumber } from 'antd';
import deepcopy from 'deepcopy';
import { SketchPicker } from 'react-color';

import { Props } from '../../interface';
import './textRender.less';

export default function TextRender(props: PropsWithChildren<Props>) {
  const { config, ...rest } = props;
  const [visible, setVisible] = useState(false);

  let currentBlock = config.getBlock();

  const inputChange = (e: any) => {
    let blocks = config?.getStoreData().block || [];
    const current = config?.store.getCurrent();
    if (current !== undefined && current > -1) {
      blocks[current].props = {
        ...blocks[current].props,
        style: {
          ...blocks[current].props.style,
        },
        text: e.target.value,
      };
      console.log(e.target.value);
    }

    const newBlocks = deepcopy(blocks);
    config?.store.setBlocks(newBlocks);
    config?.forceUpdate();
    config?.store.emit();
  };

  const styleChange = (props: any, callback?: Function) => {
    console.log(props);
    let blocks = config?.getStoreData().block || [];
    const current = config?.store.getCurrent();
    if (current !== undefined && current > -1) {
      blocks[current].props = {
        ...blocks[current].props,
        style: {
          ...blocks[current].props.style,
          ...props,
        },
      };
    }

    const newBlocks = deepcopy(blocks);
    config?.store.setBlocks(newBlocks);
    callback && callback();
    config?.forceUpdate();
    config?.store.emit();
  };

  useEffect(() => {
    currentBlock = config.getBlock();
    console.log(currentBlock);
  }, [config?.store.getCurrent()]);

  return (
    <>
      <div className="text-render-item">
        <div className="label">文案</div>
        <div className="content">
          <Input
            onChange={inputChange}
            value={currentBlock.props.text}
            defaultValue={currentBlock.props.text}
          />
        </div>
      </div>
      <div className="text-render-item">
        <div className="label">color</div>
        <div className="content">
          <div
            onClick={() => {
              setVisible(true);
            }}
            style={{
              width: '30px',
              height: '30px',
              cursor: 'pointer',
              backgroundColor: currentBlock.props.style.color,
            }}
          >
            {visible && (
              <SketchPicker
                color={currentBlock.props.style.color}
                onChangeComplete={(e) => {
                  styleChange({
                    color: e.hex,
                  });
                  setVisible(false);
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div className="text-render-item">
        <div className="label">font-size</div>
        <div className="content">
          <InputNumber
            onChange={(v) => {
              styleChange({
                fontSize: v,
              });
            }}
            value={currentBlock.props.style.fontSize}
            defaultValue={currentBlock.props.style.fontSize}
          />
        </div>
      </div>
    </>
  );
}
