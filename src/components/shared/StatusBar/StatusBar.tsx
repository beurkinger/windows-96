import { h, FunctionComponent } from 'preact';

import style from './StatusBar.css';

interface Props {
  textLeft?: string | null;
  textRight?: string | null;
}

const StatusBar: FunctionComponent<Props> = ({
  textLeft = null,
  textRight = null,
}: Props) => (
  <div className={style.statusBar}>
    {textLeft !== null && <div className={style.spaceLeft}>{textLeft}</div>}
    <div className={style.spaceRight}>{textRight}</div>
    <div className={style.handle} />
  </div>
);

export default StatusBar;
