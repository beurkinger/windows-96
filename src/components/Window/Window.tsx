import { h, FunctionComponent, ComponentChildren } from 'preact';

import TitleBar, { Props as TitleBarProps } from '../TitleBar/TitleBar';

import style from './Window.css';

interface Props {
  children: ComponentChildren;
  isInactive: boolean;
  isMaximized: boolean;
  onClickMinimize?: () => void;
  onClickMaximize?: () => void;
  onClickRestore?: () => void;
  onClickHelp?: () => void;
  onClickClose: () => void;
  title: string;
}

const Window: FunctionComponent<Props> = ({
  children = null,
  isInactive = false,
  isMaximized = false,
  onClickMinimize,
  onClickMaximize,
  onClickRestore,
  onClickHelp,
  onClickClose,
  title,
}: Props) => (
  <div className={`${style.window} window`}>
    <TitleBar
      isInactive={isInactive}
      isMaximized={isMaximized}
      onClickMinimize={onClickMinimize}
      onClickMaximize={onClickMaximize}
      onClickRestore={onClickRestore}
      onClickHelp={onClickHelp}
      onClickClose={onClickClose}
      text={title}
    />
    <div className="window-body">{children}</div>
  </div>
);

export default Window;
