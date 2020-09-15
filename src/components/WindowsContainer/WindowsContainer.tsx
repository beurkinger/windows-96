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
            iconId={app.data.iconId}
            key={i}
            onClickClose={() => closeApp(i)}
            onClickMaximize={() => maximizeApp(i)}
            onClickMinimize={() => minimizeApp(i)}
            onClickRestore={() => unMaximizeApp(i)}
            onDblClickTitleBar={() => {
              if (app.isMaximized) {
                unMaximizeApp(i);
              } else {
                maximizeApp(i);
              }
            }}
            onMouseDown={() => {
              if (!app.isMaximized) focusOnApp(i);
            }}
            onMoved={(coords) => moveApp(i, coords)}
            isInactive={!app.hasFocus}
            isMaximized={app.isMaximized}
            title={app.data.name}
            zIndex={app.zIndex}
          >
            {app.data.component && app.data.component({})}
          </Window>
        )
      )}
    </div>
  );
};

export default WindowsContainer;
