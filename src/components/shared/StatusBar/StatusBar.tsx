import { h, FunctionComponent } from 'preact';

import style from './StatusBar.css';

interface Props {
  textLeft?: string;
  textRight?: string;
}

const StatusBar: FunctionComponent<Props> = ({
  textLeft = '',
  textRight = '',
}: Props) => (
  <div className={style.statusBar}>
    <div className={style.spaceLeft}>{textLeft}</div>
    <div className={style.spaceRight}>{textRight}</div>
    <div className={style.handle} />
  </div>
);

export default StatusBar;
