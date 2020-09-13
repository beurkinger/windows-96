import { h, FunctionComponent } from 'preact';
import { useContext } from 'preact/hooks';

import RunningAppsContext from '../../context/RunningAppsContext';
import Window from '../Window/Window';

import style from './WindowsContainer.css';

const WindowsContainer: FunctionComponent = () => {
  const runningApps = useContext(RunningAppsContext);

  return (
    <div className={style.windowsContainer}>
      {runningApps.map((app) => (
        <Window key={app.zIndex} onClickClose={() => null} title={app.title}>
          {app.content}
        </Window>
      ))}
    </div>
  );
};

export default WindowsContainer;
