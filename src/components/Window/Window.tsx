import { h, FunctionComponent, ComponentChildren, createRef } from 'preact';

import useDragging from '../../hooks/useDragging';
import TitleBar, { Props as TitleBarProps } from '../TitleBar/TitleBar';

import style from './Window.css';

type Props = TitleBarProps & {
  children: ComponentChildren;
  height?: string;
  width?: string;
};

const Window: FunctionComponent<Props> = ({
  children = null,
  height = 'auto',
  isInactive = false,
  isMaximized = false,
  onClickMinimize,
  onClickMaximize,
  onClickRestore,
  onClickHelp,
  onClickClose,
  title,
  width = '300px',
}: Props) => {
  const eltRef = createRef<HTMLDivElement>();
  const coords = useDragging(eltRef, {});

  return (
    <div
      className={`${style.window} window`}
      ref={eltRef}
      style={{
        height,
        transform: `translate3d(${coords.x}px, ${coords.y}px, 0px)`,
        width,
      }}
    >
      <TitleBar
        isInactive={isInactive}
        isMaximized={isMaximized}
        onClickMinimize={onClickMinimize}
        onClickMaximize={onClickMaximize}
        onClickRestore={onClickRestore}
        onClickHelp={onClickHelp}
        onClickClose={onClickClose}
        title={title}
      />
      <div className="window-body">{children}</div>
    </div>
  );
};

export default Window;
