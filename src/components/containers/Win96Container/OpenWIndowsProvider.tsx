import { h, FunctionComponent, ComponentChildren } from 'preact';
import { useState } from 'preact/hooks';

import { appList } from '../../../data/appList';
import { getRandomId } from '../../../utils/RandomUtils';
import OpenWindowsContext, {
  ContextType,
  OpenWindow,
} from '../../../context/OpenWindowsContext';

interface Props {
  children: ComponentChildren;
}

const OpenWindowsProvider: FunctionComponent<Props> = ({ children }: Props) => {
  const [openWindows, setOpenWindows] = useState<OpenWindow[]>([
    {
      app: appList.notepad,
      coords: { x: 50, y: 50 },
      hasFocus: false,
      id: getRandomId(appList.notepad.id),
      isMaximized: false,
      isMinimized: false,
      size: { width: 100, height: 100 },
      zIndex: 0,
    },
    {
      app: appList.msPaint,
      coords: { x: 100, y: 100 },
      hasFocus: false,
      id: getRandomId(appList.msPaint.id),
      isMaximized: false,
      isMinimized: false,
      size: { width: 100, height: 100 },
      zIndex: 1,
    },
    {
      app: appList.myComputer,
      coords: { x: 150, y: 150 },
      hasFocus: false,
      id: getRandomId(appList.myComputer.id),
      isMaximized: false,
      isMinimized: false,
      size: { width: 100, height: 100 },
      zIndex: 2,
    },
  ]);

  const getBiggestZIndex = (windows: OpenWindow[]): number => {
    if (!windows.length) return -1;
    return windows.reduce(
      (acc, window) => (window.zIndex > acc ? window.zIndex : acc),
      0
    );
  };

  const addWindow: ContextType['addWindow'] = (appId) => {
    setOpenWindows((windows) => {
      const app = appList[appId];
      const zIndex = getBiggestZIndex(windows) + 1;
      const existingWindows = windows.map((window) => ({
        ...window,
        hasFocus: false,
      }));
      return [
        ...existingWindows,
        {
          app,
          id: getRandomId(app.id),
          coords: {
            x: 50 + Math.round(Math.random() * 200),
            y: 50 + Math.round(Math.random() * 200),
          },
          hasFocus: true,
          isMinimized: false,
          isMaximized: false,
          size: { width: 100, height: 100 },
          zIndex,
        },
      ];
    });
  };

  const closeWindow: ContextType['closeWindow'] = (windowIndex) => {
    setOpenWindows((windows) => windows.filter((_, i) => i !== windowIndex));
  };

  const focusOnWindow = (windowIndex: number) => {
    setOpenWindows((windows) => {
      const zIndex = getBiggestZIndex(windows) + 1;
      return windows.map((window, i) =>
        i === windowIndex
          ? { ...window, hasFocus: true, zIndex }
          : { ...window, hasFocus: false }
      );
    });
  };

  const maximizeWindow = (windowIndex: number) => {
    setOpenWindows((windows) => {
      return windows.map((window, i) =>
        i === windowIndex ? { ...window, isMaximized: true } : window
      );
    });
  };

  const minimizeWindow = (windowIndex: number) => {
    setOpenWindows((windows) => {
      return windows.map((window, i) =>
        i === windowIndex
          ? { ...window, hasFocus: false, isMinimized: true }
          : window
      );
    });
  };

  const moveWindow = (
    windowIndex: number,
    coords: { x: number; y: number }
  ) => {
    setOpenWindows((windows) => {
      return windows.map((window, i) =>
        i === windowIndex && !window.isMaximized
          ? { ...window, coords }
          : window
      );
    });
  };

  const unMaximizeWindow = (windowIndex: number) => {
    setOpenWindows((windows) => {
      return windows.map((window, i) =>
        i === windowIndex ? { ...window, isMaximized: false } : window
      );
    });
  };

  const unMinimizeWindow = (windowIndex: number) => {
    setOpenWindows((windows) => {
      const zIndex = getBiggestZIndex(windows) + 1;
      return windows.map((window, i) =>
        i === windowIndex
          ? { ...window, hasFocus: true, isMinimized: false, zIndex }
          : { ...window, hasFocus: false }
      );
    });
  };

  return (
    <OpenWindowsContext.Provider
      value={{
        addWindow,
        closeWindow,
        focusOnWindow,
        maximizeWindow,
        minimizeWindow,
        moveWindow,
        unMaximizeWindow,
        unMinimizeWindow,
        windows: openWindows,
      }}
    >
      {children}
    </OpenWindowsContext.Provider>
  );
};

export default OpenWindowsProvider;
