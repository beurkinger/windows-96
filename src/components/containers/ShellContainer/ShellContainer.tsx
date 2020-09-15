import { h, FunctionComponent } from 'preact';

import DesktopContainer from '../DesktopContainer/DesktopContainer';
import TaskbarContainer from '../TaskbarContainer/TaskbarContainer';
import WindowsContainer from '../WindowsContainer/WindowsContainer';

import style from './ShellContainer.css';

const ShellContainer: FunctionComponent = () => (
  <div className={style.shellcontainer}>
    <div className={style.mainView}>
      <DesktopContainer />
      <WindowsContainer />
    </div>
    <div className={style.taskbarView}>
      <TaskbarContainer />
    </div>
  </div>
);

export default ShellContainer;
