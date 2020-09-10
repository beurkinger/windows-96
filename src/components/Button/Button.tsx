import { h, FunctionComponent, ComponentChildren } from 'preact';

import style from './Button.css';

interface Props {
  children: ComponentChildren;
  disabled: boolean;
  onClick: () => void;
}

const Button: FunctionComponent<Props> = ({
  children = null,
  disabled = false,
  onClick,
}: Props) => (
  <button className={style.button} disabled={disabled} onClick={onClick}>
    {children}
  </button>
);

export default Button;
