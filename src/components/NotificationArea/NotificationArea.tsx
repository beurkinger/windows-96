import { h, FunctionComponent } from 'preact';

import style from './NotificationArea.css';

const NotificationArea: FunctionComponent = () => (
  <div className={style.notificationArea}>
    <div className={style.clock}>8: 05 PM</div>
  </div>
);

export default NotificationArea;
