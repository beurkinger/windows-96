import { h, FunctionComponent, Fragment } from 'preact';

import style from './Checkbox.css';

interface Props {
  checked: boolean;
  disabled?: boolean;
  id: string;
  label: string;
  onClick: () => void;
}

const Checkbox: FunctionComponent<Props> = ({
  checked,
  disabled = false,
  id,
  label,
  onClick,
}: Props) => (
  <Fragment>
    <input
      className={style.checkbox}
      disabled={disabled}
      id={id}
      checked={checked}
      onClick={onClick}
      type="checkbox"
    />
    <label htmlFor={id}>{label}</label>
  </Fragment>
);

export default Checkbox;
