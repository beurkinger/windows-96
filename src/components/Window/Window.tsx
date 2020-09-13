import { h, FunctionComponent, ComponentChildren, createRef } from 'preact';

import useDragging from '../../hooks/useDragging';
import TitleBar, { Props as TitleBarProps } from '../TitleBar/TitleBar';

import style from './Window.css';

type Props = TitleBarProps & {
  children: ComponentChildren;
  coords?: { x: number; y: number };
  height?: string;
  onMouseDown?: () => void;
  onMoved?: (coords: { x: number; y: number }) => void;
  width?: string;
  zIndex?: number;
};

const Window: FunctionComponent<Props> = ({
  coords,
  children = null,
  height = 'auto',
  isInactive = false,
  isMaximized = false,
  onMouseDown,
  onClickMinimize,
  onClickMaximize,
  onClickRestore,
  onClickHelp,
  onClickClose,
  onMoved,
  title,
  width = '300px',
  zIndex = 0,
}: Props) => {
  const eltRef = createRef<HTMLDivElement>();
  const coordsState = useDragging(eltRef, {
    onDragStart: onMouseDown,
    onDragStop: onMoved,
    savedCoords: coords,
  });

  return (
    <div
      className={`${style.window} window`}
      ref={eltRef}
      style={{
        height: isMaximized ? '100%' : height,
        transform: isMaximized
          ? 'none'
          : `translate3d(${coordsState.x}px, ${coordsState.y}px, 0px)`,
        width: isMaximized ? '100%' : width,
        zIndex,
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
