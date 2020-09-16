import { h, FunctionComponent } from 'preact';
import { useContext } from 'preact/hooks';

import OpenWindowsContext from '../../../context/OpenWindowsContext';
import Window from '../../shared/Window/Window';

import style from './WindowsContainer.css';

const WindowsContainer: FunctionComponent = () => {
  const {
    addWindow,
    closeWindow,
    focusOnWindow,
    maximizeWindow,
    minimizeWindow,
    moveWindow,
    unMaximizeWindow,
    windows,
  } = useContext(OpenWindowsContext);

  return (
    <div className={style.windowsContainer}>
      {windows.map((window, i) =>
        window.isMinimized ? null : (
          <Window
            coords={window.coords}
            iconId={window.app.iconId}
            key={window.id}
            onClickClose={() => closeWindow(i)}
            onClickMaximize={() => maximizeWindow(i)}
            onClickMinimize={() => minimizeWindow(i)}
            onClickRestore={() => unMaximizeWindow(i)}
            onDblClickTitleBar={() => {
              if (window.isMaximized) {
                unMaximizeWindow(i);
              } else {
                maximizeWindow(i);
              }
            }}
            onMouseDown={() => {
              if (!window.isMaximized) focusOnWindow(i);
            }}
            onMoved={(coords) => moveWindow(i, coords)}
            isInactive={!window.hasFocus}
            isMaximized={window.isMaximized}
            title={window.app.name}
            zIndex={window.zIndex}
          >
            {window.app.component &&
              window.app.component({
                addWindow,
                workingDir: window.workingDir,
              })}
          </Window>
        )
      )}
    </div>
  );
};

export default WindowsContainer;
