import { h, FunctionComponent } from 'preact';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import NotificationArea from '../NotificationArea/NotificationArea';

import style from './Taskbar.css';

const Taskbar: FunctionComponent = () => (
  <div className={style.taskbar}>
    <div className={style['start-button-wrapper']}>
      <Button icon={Icon} label="Start" onClick={() => null} />
    </div>
    <div className={style['task-buttons-wrapper']}>
      <Button icon={Icon} label="Notepad" onClick={() => null} />
      <Button icon={Icon} label="Paint" onClick={() => null} />
      <Button icon={Icon} label="Minesweeper" onClick={() => null} />
    </div>
    <div className={style['notification-area-wrapper']}>
      <NotificationArea />
    </div>
  </div>
);

export default Taskbar;
