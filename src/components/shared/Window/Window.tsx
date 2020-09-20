import { h, FunctionComponent, ComponentChildren, createRef } from 'preact';

import useDragging from '../../../hooks/useDragging';
import TitleBar, { Props as TitleBarProps } from '../TitleBar/TitleBar';

import style from './Window.css';

type Props = TitleBarProps & {
  children: ComponentChildren;
  coords?: { x: number; y: number };
  isDraggable?: boolean;
  isResizeable?: boolean;
  onMouseDown?: () => void;
  onMoved?: (coords: { x: number; y: number }) => void;
  onResized?: (size: { x: number; y: number }) => void;
  size?: { x: number; y: number };
  zIndex?: number;
};

const Window: FunctionComponent<Props> = ({
  coords,
  children = null,
  iconId,
  isDraggable = true,
  isInactive = false,
  isMaximized = false,
  isResizeable = true,
  onClickMinimize,
  onClickMaximize,
  onClickRestore,
  onClickHelp,
  onClickClose,
  onDblClickTitleBar,
  onMoved,
  onMouseDown,
  onResized,
  size = { x: 300, y: 300 },
  title,
  zIndex = 0,
}: Props) => {
  const windowRef = createRef<HTMLDivElement>();
  const titleBarRef = createRef<HTMLDivElement>();
  const handleRef = createRef<HTMLDivElement>();

  const getParentElement = (): HTMLElement | null => {
    return windowRef.current?.parentElement ?? null;
  };

  const getTitleBarElement = (): HTMLElement | null => {
    return titleBarRef.current ?? null;
  };

  const getResizeHandleElement = (): HTMLElement | null => {
    return handleRef.current ?? null;
  };

  const handleOnMoved = (coords: { x: number; y: number }) => {
    if (!isMaximized && onMoved) onMoved(coords);
  };

  const handleOnResized = (coords: { x: number; y: number }) => {
    if (!isMaximized && onResized) onResized(coords);
  };

  const coordsState = useDragging(getTitleBarElement, {
    getBoundingElt: getParentElement,
    initialCoords: coords,
    isActive: isDraggable,
    onDragStop: handleOnMoved,
  });

  const sizeState = useDragging(getResizeHandleElement, {
    getBoundingElt: getParentElement,
    initialCoords: size,
    isActive: isResizeable,
    minCoordsValue: { x: 200, y: 150 },
    onDragStop: handleOnResized,
  });

  return (
    <div
      className={`${style.window} window`}
      onMouseDown={onMouseDown}
      ref={windowRef}
      style={{
        height: isMaximized ? '100%' : `${sizeState.y}px`,
        transform: isMaximized
          ? 'none'
          : `translate3d(${coordsState.x}px, ${coordsState.y}px, 0px)`,
        width: isMaximized ? '100%' : `${sizeState.x}px`,
        zIndex,
      }}
    >
      <TitleBar
        iconId={iconId}
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
      <div className={style.windowMain}>{children}</div>
      <div className={style.handle} ref={handleRef} />
    </div>
  );
};

export default Window;
