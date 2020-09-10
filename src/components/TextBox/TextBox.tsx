import { h, FunctionComponent, Fragment } from 'preact';

import style from './Textbox.css';

interface Props {
  cols?: number;
  disabled?: boolean;
  id: string;
  label: string;
  onChange: (e: Event) => void;
  rows?: number;
  type?: 'text' | 'textarea';
  value: string;
}

const Textbox: FunctionComponent<Props> = ({
  cols,
  disabled = false,
  id,
  label,
  onChange,
  rows,
  type = 'text',
  value,
}: Props) => (
  <Fragment>
    <label htmlFor={id}>{label}</label>
    <input
      className={style.textbox}
      cols={cols}
      disabled={disabled}
      id={id}
      onChange={onChange}
      rows={rows}
      type={type}
      value={value}
    />
  </Fragment>
);

export default Textbox;
