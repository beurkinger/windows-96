import { h, FunctionComponent, ComponentChildren } from 'preact';

import style from './Bump.css';

interface Props {
  children: ComponentChildren;
  size?: 'small' | 'medium' | 'large';
  type?: 'inner' | 'outer';
}

const Bump: FunctionComponent<Props> = ({
  children,
  size = 'medium',
  type = 'inner',
}: Props) => (
  <div className={`${style.bump} ${style[size]} ${style[type]}`}>
    {children}
  </div>
);

export default Bump;
