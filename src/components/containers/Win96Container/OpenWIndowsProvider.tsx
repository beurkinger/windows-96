import { h, FunctionComponent, ComponentChildren } from 'preact';
import { useState } from 'preact/hooks';
import { v4 as uuid } from 'uuid';

import { App } from '../../../types/App';
import { IconId } from '../../../types/Icon';
import { FileSystemDir, FileSystemFile } from '../../../types/FileSystem';
import { appList } from '../../../data/appList';
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
      app: appList.myComputer,
      coords: { x: 150, y: 150 },
      hasFocus: false,
      iconId: appList.myComputer.iconId,
      id: uuid(),
      isDraggable: true,
      isMaximized: false,
      isMinimized: false,
      isResizeable: true,
      size: { x: 100, y: 100 },
      title: appList.myComputer.name,
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

  const getWindowTitle = (
    app: App,
    workingDir?: FileSystemDir,
    workingFile?: FileSystemFile
  ): string => {
    if (workingFile && workingFile.name) {
      return `${workingFile.name} - ${app.name}`;
    }
    if (workingDir) return workingDir.name;
    return app.name;
  };

  const getWindowIconId = (app: App, workingDir?: FileSystemDir): IconId => {
    if (app.id !== 'myComputer') return app.iconId;
    if (workingDir && workingDir.iconId) return workingDir.iconId;
    if (workingDir) return 'folderOpen';
    return app.iconId;
  };

  const openApp: ContextType['openApp'] = ({
    appId,
    isDraggable = true,
    isResizeable = true,
    workingDir,
    workingFile,
  }) => {
    setOpenWindows((windows) => {
      const app = appList[appId];
      const iconId = getWindowIconId(app, workingDir);
      const title = getWindowTitle(app, workingDir, workingFile);
      const zIndex = getBiggestZIndex(windows) + 1;
      const existingWindows = windows.map((window) => ({
        ...window,
        hasFocus: false,
      }));
      return [
        ...existingWindows,
        {
          app,
          iconId,
          id: uuid(),
          coords: {
            x: 50 + Math.round(Math.random() * 200),
            y: 50 + Math.round(Math.random() * 200),
          },
          hasFocus: true,
          isDraggable,
          isMinimized: false,
          isMaximized: false,
          isResizeable,
          size: { x: 100, y: 100 },
          title,
          workingDir,
          workingFile,
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

  const resizeWindow = (
    windowIndex: number,
    size: { x: number; y: number }
  ) => {
    setOpenWindows((windows) => {
      return windows.map((window, i) =>
        i === windowIndex && !window.isMaximized ? { ...window, size } : window
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
        openApp,
        closeWindow,
        focusOnWindow,
        maximizeWindow,
        minimizeWindow,
        moveWindow,
        resizeWindow,
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
