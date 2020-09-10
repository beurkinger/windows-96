import { h, FunctionComponent, Fragment } from 'preact';

import style from './Radio.css';

interface Props {
  checked: boolean;
  disabled?: boolean;
  id: string;
  label: string;
  name: string;
  onClick: () => void;
}

const Radio: FunctionComponent<Props> = ({
  checked,
  disabled = false,
  id,
  label,
  name,
  onClick,
}: Props) => (
  <Fragment>
    <input
      className={style.radio}
      checked={checked}
      disabled={disabled}
      id={id}
      name={name}
      onClick={onClick}
      type="radio"
    />
    <label htmlFor={id}>{label}</label>
  </Fragment>
);

export default Radio;
