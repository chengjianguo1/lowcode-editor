import { RefObject } from 'react';
import { UserConfig } from '@/pages/userConfig';

export const wrapperEvent = (config?: UserConfig) => {
  return {
    onMouseDown(e: React.MouseEvent) {
      console.log(e);
    },
    onMouseMove(e: React.MouseEvent) {
      //   console.log(e);
      //   console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    },
  };
};
