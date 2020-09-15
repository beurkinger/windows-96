import { h, FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';

import RunningAppsContext, {
  ContextType,
  RunningApp,
} from '../../context/RunningAppsContext';
import { appList } from '../../data/appList';
import Shell from '../Shell/Shell';

import style from './Win96.css';

const Win96: FunctionComponent = () => {
  const [runningApps, setRunningApps] = useState<RunningApp[]>([
    {
      coords: { x: 50, y: 50 },
      data: appList.notepad,
      hasFocus: false,
      isMaximized: false,
      isMinimized: false,
      size: { width: 100, height: 100 },
      zIndex: 0,
    },
    {
      coords: { x: 100, y: 100 },
      data: appList.msPaint,
      hasFocus: false,
      isMaximized: false,
      isMinimized: false,
      size: { width: 100, height: 100 },
      zIndex: 1,
    },
    {
      coords: { x: 150, y: 150 },
      data: appList.explorer,
      hasFocus: false,
      isMaximized: false,
      isMinimized: false,
      size: { width: 100, height: 100 },
      zIndex: 2,
    },
  ]);

  const getBiggestZIndex = (apps: RunningApp[]): number => {
    if (!apps.length) return -1;
    return apps.reduce((acc, app) => (app.zIndex > acc ? app.zIndex : acc), 0);
  };

  const addApp: ContextType['addApp'] = (appId) => {
    setRunningApps((apps) => {
      const data = appList[appId];
      const zIndex = getBiggestZIndex(apps) + 1;
      const existingApps = apps.map((app) => ({ ...app, hasFocus: false }));
      return [
        ...existingApps,
        {
          data,
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

  const closeApp: ContextType['closeApp'] = (appIndex) => {
    setRunningApps((apps) => apps.filter((_, i) => i !== appIndex));
  };

  const focusOnApp = (appIndex: number) => {
    setRunningApps((apps) => {
      const zIndex = getBiggestZIndex(apps) + 1;
      return apps.map((app, i) =>
        i === appIndex
          ? { ...app, hasFocus: true, zIndex }
          : { ...app, hasFocus: false }
      );
    });
  };

  const maximizeApp = (appIndex: number) => {
    setRunningApps((apps) => {
      return apps.map((app, i) =>
        i === appIndex ? { ...app, isMaximized: true } : app
      );
    });
  };

  const minimizeApp = (appIndex: number) => {
    setRunningApps((apps) => {
      return apps.map((app, i) =>
        i === appIndex ? { ...app, hasFocus: false, isMinimized: true } : app
      );
    });
  };

  const moveApp = (appIndex: number, coords: { x: number; y: number }) => {
    setRunningApps((apps) => {
      return apps.map((app, i) =>
        i === appIndex && !app.isMaximized ? { ...app, coords } : app
      );
    });
  };

  const unMaximizeApp = (appIndex: number) => {
    setRunningApps((apps) => {
      return apps.map((app, i) =>
        i === appIndex ? { ...app, isMaximized: false } : app
      );
    });
  };

  const unMinimizeApp = (appIndex: number) => {
    setRunningApps((apps) => {
      const zIndex = getBiggestZIndex(apps) + 1;
      return apps.map((app, i) =>
        i === appIndex
          ? { ...app, hasFocus: true, isMinimized: false, zIndex }
          : { ...app, hasFocus: false }
      );
    });
  };

  return (
    <RunningAppsContext.Provider
      value={{
        apps: runningApps,
        addApp,
        closeApp,
        focusOnApp,
        maximizeApp,
        minimizeApp,
        moveApp,
        unMaximizeApp,
        unMinimizeApp,
      }}
    >
      <div className={style.win96}>
        <Shell />
      </div>
    </RunningAppsContext.Provider>
  );
};

export default Win96;
