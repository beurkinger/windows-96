import { h, FunctionComponent, RefObject } from 'preact';

import minimize from '../../../assets/img/ui/minimize.svg';
import maximize from '../../../assets/img/ui/maximize.svg';
import restore from '../../../assets/img/ui/restore.svg';
// import help from '../../../assets/img/ui/help.svg';
import close from '../../../assets/img/ui/close.svg';
import { IconId } from '../../../types/Icon';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import style from './TitleBar.css';

export interface Props {
  iconId?: IconId;
  isInactive?: boolean;
  isMaximized?: boolean;
  onClickMinimize?: () => void;
  onClickMaximize?: () => void;
  onClickRestore?: () => void;
  onClickHelp?: () => void;
  onClickClose: () => void;
  onDblClickTitleBar?: () => void;
  innerRef?: RefObject<HTMLDivElement>;
  title: string;
}

const TitleBar: FunctionComponent<Props> = ({
  iconId,
  isInactive = false,
  isMaximized = false,
  onClickMinimize,
  onClickMaximize,
  onClickRestore,
  onClickHelp,
  onClickClose,
  onDblClickTitleBar,
  innerRef,
  title,
}: Props) => (
  <div
    className={`${style.titleBar} ${isInactive ? style.inactive : ''}`}
    onDblClick={onDblClickTitleBar}
    ref={innerRef}
  >
    <div className={style.titleBarIcon}>
      {!!iconId && <Icon iconId={iconId} />}
    </div>
    <div className={style.titleBarText}>{title}</div>
    <div className={style.titleBarControls}>
      {onClickMinimize && (
        <Button
          label={<img className={style.minimize} src={minimize} />}
          onClick={onClickMinimize}
        />
      )}
      {!isMaximized && (
        <Button
          disabled={!onClickMaximize}
          label={<img className={style.maximize} src={maximize} />}
          onClick={onClickMaximize}
        />
      )}
      {isMaximized && onClickRestore && (
        <Button
          label={<img className={style.restore} src={restore} />}
          onClick={onClickRestore}
        />
      )}
      {onClickHelp && <Button onClick={onClickHelp} />}
      <Button
        label={<img className={style.close} src={close} />}
        onClick={onClickClose}
      />
    </div>
  </div>
);

export default TitleBar;
