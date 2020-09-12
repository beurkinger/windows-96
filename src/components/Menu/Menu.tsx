import { h, FunctionComponent } from 'preact';

import style from './Menu.css';

interface Option {
  disabled?: boolean;
  label: string;
  value: string;
}

interface Props {
  // disabled?: boolean;
  onSelect: (value: string) => void;
  options: Option[];
  // type: string;
}

const Menu: FunctionComponent<Props> = ({
  // disabled = false,
  onSelect,
  options,
}: // type = 'menu',
Props) => (
  <ul className={style.menu}>
    {options.map((option, i) => (
      <li key={i + option.label} onSelect={() => onSelect(option.value)}>
        {option.label}
      </li>
    ))}
  </ul>
);

export default Menu;
