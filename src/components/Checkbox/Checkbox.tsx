import { h, FunctionComponent, Fragment } from 'preact';

import style from './Checkbox.css';

interface Props {
  checked: boolean;
  disabled?: boolean;
  id: string;
  label: string;
  onChange: (e: Event) => void;
}

const Checkbox: FunctionComponent<Props> = ({
  checked,
  disabled = false,
  id,
  label,
  onChange,
}: Props) => (
  <Fragment>
    <input
      className={style.checkbox}
      disabled={disabled}
      id={id}
      checked={checked}
      onChange={onChange}
      type="checkbox"
    />
    <label htmlFor={id}>{label}</label>
  </Fragment>
);

export default Checkbox;
