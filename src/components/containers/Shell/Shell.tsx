import { h, FunctionComponent } from 'preact';

import DesktopContainer from '../DesktopContainer/DesktopContainer';
import TaskbarContainer from '../TaskbarContainer/TaskbarContainer';
import WindowsContainer from '../WindowsContainer/WindowsContainer';

import style from './Shell.css';

const Shell: FunctionComponent = () => (
  <div className={style.shell}>
    <div className={style.mainView}>
      <DesktopContainer />
      <WindowsContainer />
    </div>
    <div className={style.taskbarView}>
      <TaskbarContainer />
    </div>
  </div>
);

export default Shell;
