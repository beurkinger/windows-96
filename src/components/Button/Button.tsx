import { h, FunctionComponent, ComponentChildren } from 'preact';

import style from './Button.css';

interface Props {
  children?: ComponentChildren;
  disabled?: boolean;
  onClick: () => void;
  type?: 'button' | 'reset' | 'submit';
}

const Button: FunctionComponent<Props> = ({
  children = null,
  disabled = false,
  onClick,
  type = 'button',
}: Props) => (
  <button
    className={style.button}
    disabled={disabled}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

export default Button;
