import { h, FunctionComponent, ComponentChildren } from 'preact';
import { useState } from 'preact/hooks';
import { v4 as uuid } from 'uuid';

import { App } from '../../../types/App';
import { IconId } from '../../../types/Icon';
import { FileSystemDir, FileSystemFile } from '../../../types/FileSystem';
import { appList } from '../../../data/appList';
import OpenWindowsContext, {
  OpenWindow,
  OpenWindowsContextType,
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
      size: { x: 300, y: 300 },
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

  const openApp: OpenWindowsContextType['openApp'] = ({
    appId,
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
          isDraggable: app.isDraggable ?? true,
          isMinimized: false,
          isMaximized: false,
          isResizeable: app.isResizeable ?? true,
          size: {
            x: app.size ? app.size.width : 300,
            y: app.size ? app.size.height : 300,
          },
          title,
          workingDir,
          workingFile,
          zIndex,
        },
      ];
    });
  };

  const closeWindow = (id: string) => {
    setOpenWindows((windows) => windows.filter((window) => window.id !== id));
  };

  const focusOnWindow = (id: string) => {
    setOpenWindows((windows) => {
      const zIndex = getBiggestZIndex(windows) + 1;
      return windows.map((window) =>
        window.id === id
          ? { ...window, hasFocus: true, zIndex }
          : { ...window, hasFocus: false }
      );
    });
  };

  const maximizeWindow = (id: string) => {
    setOpenWindows((windows) => {
      return windows.map((window) =>
        window.id === id ? { ...window, isMaximized: true } : window
      );
    });
  };

  const minimizeWindow = (id: string) => {
    setOpenWindows((windows) => {
      return windows.map((window) =>
        window.id === id
          ? { ...window, hasFocus: false, isMinimized: true }
          : window
      );
    });
  };

  const moveWindow = (id: string, coords: { x: number; y: number }) => {
    setOpenWindows((windows) => {
      return windows.map((window) =>
        window.id === id && !window.isMaximized ? { ...window, coords } : window
      );
    });
  };

  const resizeWindow = (id: string, size: { x: number; y: number }) => {
    setOpenWindows((windows) => {
      return windows.map((window) =>
        window.id === id && !window.isMaximized ? { ...window, size } : window
      );
    });
  };

  const unMaximizeWindow = (id: string) => {
    setOpenWindows((windows) => {
      return windows.map((window) =>
        window.id === id ? { ...window, isMaximized: false } : window
      );
    });
  };

  const unMinimizeWindow = (id: string) => {
    setOpenWindows((windows) => {
      const zIndex = getBiggestZIndex(windows) + 1;
      return windows.map((window) =>
        window.id === id
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
