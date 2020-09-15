import { h, FunctionComponent } from 'preact';

import style from './MenuBar.css';

interface Props {
  options: string[];
}

const MenuBar: FunctionComponent<Props> = ({ options }: Props) => (
  <ul className={style.menuBar}>
    {options.map((option) => (
      <li className={style.menuBarOption} key={option}>
        <div className={style.menuBarOptionLabel}>{option}</div>
      </li>
    ))}
  </ul>
);

export default MenuBar;
