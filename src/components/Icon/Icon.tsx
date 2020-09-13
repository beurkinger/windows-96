import { h, FunctionComponent } from 'preact';

import { IconId, iconList } from './iconList';
import style from './Icon.css';

interface Props {
  iconId?: IconId;
  size?: 8 | 16 | 24 | 32;
}

const Icon: FunctionComponent<Props> = ({
  iconId = 'briefcase',
  size = 16,
}: Props) => {
  const src = iconList[iconId][size] ?? '';
  console.log(iconId, src);
  return (
    <img
      className={style.icon}
      src={src}
      style={{ height: `${size}px`, width: `${size}px` }}
    />
  );
}

export default Icon;
