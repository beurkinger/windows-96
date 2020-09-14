import { h, FunctionComponent } from 'preact';

import MenuOption, { OptionType } from '../MenuOption/MenuOption';

import style from './Menu.css';

interface Props {
  // disabled?: boolean;
  isLarge?: boolean;
  onSelect: (value: string, e: MouseEvent) => void;
  options: OptionType[][];
  // type: string;
}

const Menu: FunctionComponent<Props> = ({
  // disabled = false,
  isLarge = false,
  onSelect,
  options,
}: // type = 'menu',
Props) => (
  <div className={`${style.menu} ${isLarge ? style.large : ''}`}>
    {options.map((optionGroup, i) => (
      <div className={style.optionGroup} key={i}>
        {optionGroup.map((option, i) => (
          <MenuOption
            disabled={option.disabled}
            iconId={option.iconId}
            isLarge={isLarge}
            key={i + option.label}
            label={option.label}
            onSelect={onSelect}
            subMenu={option.subMenu}
            value={option.value}
          />
        ))}
      </div>
    ))}
  </div>
);

export default Menu;
