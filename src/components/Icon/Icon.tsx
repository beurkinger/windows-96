import { h, FunctionComponent } from 'preact';

import style from './Icon.css';

interface Props {
  size?: 8 | 16 | 24 | 32;
}

const Icon: FunctionComponent<Props> = ({ size = 16 }: Props) => (
  <div
    className={style.icon}
    style={{ height: `${size}px`, width: `${size}px` }}
  />
);

export default Icon;
