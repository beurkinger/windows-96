import { h, FunctionComponent } from 'preact';

import Button from '../Button/Button';
import NotificationArea from '../NotificationArea/NotificationArea';

import style from './Taskbar.css';

const Taskbar: FunctionComponent = () => (
  <div className={style.taskbar}>
    <div className={style['start-button-wrapper']}>
      <Button onClick={() => null}>Start</Button>
    </div>
    <div className={style['task-buttons-wrapper']}>
      <Button onClick={() => null}>Notepad</Button>
      <Button onClick={() => null}>Paint</Button>
      <Button onClick={() => null}>Minesweeper</Button>
    </div>
    <div className={style['notification-area-wrapper']}>
      <NotificationArea />
    </div>
  </div>
);

export default Taskbar;
