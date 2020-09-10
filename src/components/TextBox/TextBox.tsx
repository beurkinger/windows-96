import { h, FunctionComponent, Fragment } from 'preact';

import style from './Textbox.css';

interface Props {
  disabled?: boolean;
  id: string;
  label: string;
  onChange: (e: Event) => void;
  value: string;
}

const Textbox: FunctionComponent<Props> = ({
  disabled = false,
  id,
  label,
  onChange,
  value,
}: Props) => (
  <Fragment>
    <label htmlFor={id}>{label}</label>
    <input
      className={style.textbox}
      disabled={disabled}
      id={id}
      onChange={onChange}
      type="text"
      value={value}
    />
  </Fragment>
);

export default Textbox;
