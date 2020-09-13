import { h, FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';

import RunningAppContext, {
  ContextType,
  RunningApp,
} from '../../context/RunningAppsContext';
import Icon from '../Icon/Icon';
import Shell from '../Shell/Shell';

import style from './App.css';

const App: FunctionComponent = () => {
  const [runningApps, setRunningApps] = useState<RunningApp[]>([
    {
      content: 'How do you do ?',
      coords: { x: 50, y: 50 },
      icon: <Icon />,
      size: { width: 100, height: 100 },
      title: 'Notepad',
      zIndex: 0,
    },
    {
      content: 'How do you do ?',
      coords: { x: 100, y: 100 },
      icon: <Icon />,
      size: { width: 100, height: 100 },
      title: 'Paint',
      zIndex: 0,
    },
    {
      content: 'How do you do ?',
      coords: { x: 150, y: 150 },
      icon: <Icon />,
      size: { width: 100, height: 100 },
      title: 'Minesweeeper',
      zIndex: 0,
    },
  ]);

  const getBiggestZIndex = (apps: RunningApp[]): number => {
    if (!apps.length) return -1;
    return apps.reduce((acc, app) => (app.zIndex > acc ? app.zIndex : acc), 0);
  };

  const addApp: ContextType['addApp'] = (app) => {
    const zIndex = getBiggestZIndex(runningApps) + 1;
    setRunningApps((apps) => [...apps, { ...app, zIndex }]);
  };

  const makeAppOnTop = (appZIndex: number) => {
    const zIndex = getBiggestZIndex(runningApps) + 1;
    setRunningApps((apps) =>
      apps.map((app) => (app.zIndex === appZIndex ? { ...app, zIndex } : app))
    );
  };

  return (
    <RunningAppContext.Provider
      value={{ apps: runningApps, addApp, makeAppOnTop }}
    >
      <div className={style.app}>
        <Shell />
      </div>
    </RunningAppContext.Provider>
  );
};

export default App;
