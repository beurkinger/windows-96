import { h, FunctionComponent, ComponentChild } from 'preact';
import Icon from '../Icon/Icon';

import style from './Button.css';

interface Props {
  disabled?: boolean;
  fontWeight?: 'normal' | 'bold';
  icon?: ComponentChild;
  isActive?: boolean;
  inTaskbar?: boolean;
  label?: string;
  noOutline?: boolean;
  onClick: () => void;
  textAlign?: 'left' | 'right' | 'center';
  type?: 'button' | 'reset' | 'submit';
}

const Button: FunctionComponent<Props> = ({
  disabled = false,
  fontWeight = 'normal',
  icon = null,
  isActive = false,
  inTaskbar = false,
  label = '',
  noOutline = false,
  onClick,
  textAlign = 'center',
  type = 'button',
}: Props) => (
  <button
    className={`${style.button} ${isActive ? style.active : ''} ${
      inTaskbar ? style.inTaskbar : ''
    } ${noOutline ? style.noOutline : ''}`}
    disabled={disabled}
    onClick={onClick}
    type={type}
    style={{ fontWeight, textAlign }}
  >
    {icon && <Icon />}
    {label && <div>{label}</div>}
  </button>
);

export default Button;
