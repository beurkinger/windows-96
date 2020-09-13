import { h, FunctionComponent } from 'preact';
import { useContext } from 'preact/hooks';

import RunningAppsContext from '../../context/RunningAppsContext';
import Window from '../Window/Window';

import style from './WindowsContainer.css';

const WindowsContainer: FunctionComponent = () => {
  const {
    apps,
    closeApp,
    focusOnApp,
    maximizeApp,
    minimizeApp,
    moveApp,
    unMaximizeApp,
  } = useContext(RunningAppsContext);

  return (
    <div className={style.windowsContainer}>
      {apps.map((app, i) =>
        app.isMinimized ? null : (
          <Window
            coords={app.coords}
            key={i}
            onClickClose={() => closeApp(i)}
            onClickMaximize={() => maximizeApp(i)}
            onClickMinimize={() => minimizeApp(i)}
            onClickRestore={() => unMaximizeApp(i)}
            onMouseDown={() => focusOnApp(i)}
            onMoved={(coords) => moveApp(i, coords)}
            isInactive={!app.hasFocus}
            isMaximized={app.isMaximized}
            title={app.title}
            zIndex={app.zIndex}
          >
            {app.content}
          </Window>
        )
      )}
    </div>
  );
};

export default WindowsContainer;
