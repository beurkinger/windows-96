import { h, FunctionComponent } from 'preact';

import DesktopContainer from '../DesktopContainer/DesktopContainer';
import TaskbarContainer from '../TaskbarContainer/TaskbarContainer';
import WindowsContainer from '../WindowsContainer/WindowsContainer';
import OpenWindowsProvider from './OpenWIndowsProvider';

import style from './Win96Container.css';

const Win96Container: FunctionComponent = () => (
  <div className={style.win96}>
    <div className={style.shell}>
      <OpenWindowsProvider>
        <div className={style.mainView}>
          <DesktopContainer />
          <WindowsContainer />
        </div>
        <div className={style.taskbarView}>
          <TaskbarContainer />
        </div>
      </OpenWindowsProvider>
    </div>
  </div>
);

export default Win96Container;
