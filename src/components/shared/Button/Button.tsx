import { h, FunctionComponent, ComponentChildren } from 'preact';
import { IconId, IconSize } from '../../../types/Icon';

import Icon from '../Icon/Icon';

import style from './Button.css';

interface Props {
  disabled?: boolean;
  fontWeight?: 'normal' | 'bold';
  hasFocus?: boolean;
  iconId?: IconId;
  iconSize?: IconSize;
  isActive?: boolean;
  inTaskbar?: boolean;
  label?: ComponentChildren;
  noOutline?: boolean;
  onClick?: (e: MouseEvent) => void;
  textAlign?: 'left' | 'right' | 'center';
  type?: 'button' | 'reset' | 'submit';
}

const Button: FunctionComponent<Props> = ({
  disabled = false,
  fontWeight = 'normal',
  hasFocus = false,
  iconId,
  iconSize = 16,
  isActive = false,
  inTaskbar = false,
  label = '',
  noOutline = false,
  onClick,
  textAlign = 'center',
  type = 'button',
}: Props) => (
  <button
    className={`${style.button} ${hasFocus ? style.focus : ''} ${
      isActive ? style.active : ''
    } ${inTaskbar ? style.inTaskbar : ''} ${noOutline ? style.noOutline : ''}`}
    disabled={disabled}
    onClick={onClick}
    type={type}
    style={{ fontWeight, textAlign }}
  >
    {!!iconId && <Icon iconId={iconId} size={iconSize} />}
    {!!label && <div>{label}</div>}
  </button>
);

export default Button;
