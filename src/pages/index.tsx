import React, { useState, useEffect, createContext, useContext } from 'react';
import styles from './index.less';
import Header from './components/header/header';
import LeftRender from './components/leftRender/leftRender';
import RightRender from './components/rightRender/rightRender';
import Container from './components/container/container';
import { configContext } from './layouts';

export default function IndexPage() {
  const config = useContext(configContext);

  return (
    <>
      <Header config={config} />
      <div
        style={{
          display: 'flex',
          // justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '40px',
          height: `calc(100vh)`,
          width: '100vw',
        }}
      >
        <LeftRender config={config} style={{ height: '100%' }}></LeftRender>
        <Container
          config={config}
          style={{ height: 'calc(100% - 10px)', margin: '5px' }}
        ></Container>
        <RightRender config={config} style={{ height: '100%' }}></RightRender>
      </div>
    </>
  );
}
