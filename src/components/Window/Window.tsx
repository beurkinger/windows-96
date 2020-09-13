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
  onDblClickTitleBar,
  onMoved,
  title,
  width = '300px',
  zIndex = 0,
}: Props) => {
  const windowRef = createRef<HTMLDivElement>();
  const titleBarRef = createRef<HTMLDivElement>();

  const getParentElement = (): HTMLElement | null => {
    return windowRef.current?.parentElement ?? null;
  };

  const getTitleBarElement = (): HTMLElement | null => {
    return titleBarRef.current ?? null;
  };

  const handleOnMoved = (coords: { x: number; y: number }) => {
    if (!isMaximized && onMoved) onMoved(coords);
  };

  const coordsState = useDragging(getTitleBarElement, {
    getBoundingElt: getParentElement,
    onDragStop: handleOnMoved,
    savedCoords: coords,
  });

  return (
    <div
      className={`${style.window} window`}
      onMouseDown={onMouseDown}
      ref={windowRef}
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
        innerRef={titleBarRef}
        isInactive={isInactive}
        isMaximized={isMaximized}
        onClickMinimize={onClickMinimize}
        onClickMaximize={onClickMaximize}
        onClickRestore={onClickRestore}
        onClickHelp={onClickHelp}
        onClickClose={onClickClose}
        onDblClickTitleBar={onDblClickTitleBar}
        title={title}
      />
      <div className="window-body">{children}</div>
    </div>
  );
};

export default Window;
