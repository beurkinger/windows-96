import { h, FunctionComponent } from 'preact';

import Desktop from '../Desktop/Desktop';
import WindowsContainer from '../WindowsContainer/WindowsContainer';

import style from './Shell.css';

const Shell: FunctionComponent = () => (
  <div className={style.shell}>
    <div className={style.mainView}>
      <Desktop />
      <WindowsContainer />
    </div>
    <div className={style.taskbarView}></div>
  </div>
);

export default Shell;
