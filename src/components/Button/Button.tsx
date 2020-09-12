import { h, FunctionComponent, ComponentChild } from 'preact';
import Icon from '../Icon/Icon';

import style from './Button.css';

interface Props {
  disabled?: boolean;
  icon?: ComponentChild;
  label?: string;
  onClick: () => void;
  type?: 'button' | 'reset' | 'submit';
}

const Button: FunctionComponent<Props> = ({
  disabled = false,
  icon = null,
  label = '',
  onClick,
  type = 'button',
}: Props) => (
  <button
    className={style.button}
    disabled={disabled}
    onClick={onClick}
    type={type}
  >
    {icon && <Icon />}
    {label && <div>{label}</div>}
  </button>
);

export default Button;
