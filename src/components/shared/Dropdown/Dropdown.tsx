import { h, FunctionComponent, Fragment } from 'preact';

import style from './Dropdown.css';

interface Option {
  disabled?: boolean;
  label: string;
  value: string;
}

interface Props {
  disabled?: boolean;
  id: string;
  label?: string;
  options: Option[];
  onChange: (e: Event) => void;
  selected: string;
}

const Dropdown: FunctionComponent<Props> = ({
  disabled = false,
  id,
  label = '',
  onChange,
  options,
  selected,
}: Props) => (
  <Fragment>
    {label && <label htmlFor={id}>{label}</label>}
    <select
      className={style.dropdown}
      disabled={disabled}
      id={id}
      onChange={onChange}
    >
      {options.map((option, i) => (
        <option
          disabled={option.disabled}
          key={i + option.label}
          selected={option.value === selected}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  </Fragment>
);

export default Dropdown;
