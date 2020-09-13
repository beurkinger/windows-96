import { h, FunctionComponent, ComponentChild } from 'preact';

import Icon from '../Icon/Icon';
import Menu from '../Menu/Menu';

import style from './MenuOption.css';

export type OptionType = {
  disabled?: boolean;
  icon?: ComponentChild;
  label: string;
  subMenu?: { isLarge?: boolean; options: OptionType[][] };
  value: string;
};

export type Props = OptionType & {
  isLarge?: boolean;
  onSelect: (value: string) => void;
};

const MenuOption: FunctionComponent<Props> = ({
  // disabled,
  icon,
  isLarge = false,
  onSelect,
  label,
  subMenu,
  value,
}: Props) => (
  <div
    className={`${style.menuOption} ${isLarge ? style.large : ''}`}
    onSelect={() => onSelect(value)}
  >
    <div className={style.menuOptionIcon}>{icon}</div>
    <div className={style.menuOptionLabel}>{label}</div>
    <div className={style.menuOptionArrow}>
      {!!subMenu && <Icon iconId="menuArrow" size={8} />}
    </div>
    {!!subMenu && (
      <div className={style.menuOptionSubMenu}>
        <Menu
          isLarge={subMenu.isLarge}
          onSelect={onSelect}
          options={subMenu.options}
        />
      </div>
    )}
  </div>
);

export default MenuOption;
