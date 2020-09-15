import { h, FunctionComponent, ComponentChildren } from 'preact';

import style from './Countour.css';

interface Props {
  children: ComponentChildren;
}

const Countour: FunctionComponent<Props> = ({ children }: Props) => (
  <div className={style.countour}>{children}</div>
);

export default Countour;
