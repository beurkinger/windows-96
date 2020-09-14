import { h, FunctionComponent } from 'preact';

import { IconId } from '../../data/iconList';
import Icon from '../Icon/Icon';
import Menu from '../Menu/Menu';

import style from './MenuOption.css';

export type OptionType = {
  disabled?: boolean;
  iconId?: IconId;
  label: string;
  subMenu?: { isLarge?: boolean; options: OptionType[][] };
  value: string;
};

export type Props = OptionType & {
  isLarge?: boolean;
  onSelect: (value: string, e: MouseEvent) => void;
};

const MenuOption: FunctionComponent<Props> = ({
  // disabled,
  iconId,
  isLarge = false,
  onSelect,
  label,
  subMenu,
  value,
}: Props) => {
  const handleOnClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onSelect(value, e);
  };

  return (
    <div
      className={`${style.menuOption} ${isLarge ? style.large : ''}`}
      onClick={handleOnClick}
    >
      <div className={style.menuOptionIcon}>
        {!!iconId && <Icon iconId={iconId} size={isLarge ? 24 : 16} />}
      </div>
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
};

export default MenuOption;
