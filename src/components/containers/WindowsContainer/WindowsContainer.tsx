import { h, FunctionComponent } from 'preact';
import { useContext } from 'preact/hooks';

import { AppId, AppProps } from '../../../data/appList';
import OpenWindowsContext, {
  OpenWindow,
} from '../../../context/OpenWindowsContext';
import MyComputerApp from '../../apps/MyComputerApp/MyComputerApp';
import NotepadApp from '../../apps/NotepadApp/NotepadApp';
import QuickViewApp from '../../apps/QuickViewApp/QuickViewApp';
import VoidApp from '../../apps/VoidApp/VoidApp';
import Window from '../../shared/Window/Window';

import style from './WindowsContainer.css';

const components: { [key in AppId]: FunctionComponent<AppProps> } = {
  binEmpty: VoidApp,
  binFull: VoidApp,
  briefcase: VoidApp,
  calc: VoidApp,
  cdDrive: VoidApp,
  cdPlayer: VoidApp,
  controlPanel: VoidApp,
  defrag: VoidApp,
  dialUpNetwork: VoidApp,
  exchange: VoidApp,
  explorer: VoidApp,
  find: VoidApp,
  findComputer: VoidApp,
  findMsn: VoidApp,
  floppyDrive: VoidApp,
  hardDrive: VoidApp,
  help: VoidApp,
  hyperterminal: VoidApp,
  mediaPlayer: VoidApp,
  msn: VoidApp,
  msDos: VoidApp,
  msPaint: VoidApp,
  myComputer: MyComputerApp,
  networkNeighborhood: VoidApp,
  notepad: NotepadApp,
  phoneDialer: VoidApp,
  printers: VoidApp,
  register: VoidApp,
  quickView: QuickViewApp,
  run: VoidApp,
  scandisk: VoidApp,
  shutdown: VoidApp,
  soundRecorder: VoidApp,
  taskbar: VoidApp,
  volumeControl: VoidApp,
  wordpad: VoidApp,
};

const WindowsContainer: FunctionComponent = () => {
  const {
    closeWindow,
    focusOnWindow,
    maximizeWindow,
    minimizeWindow,
    moveWindow,
    openApp,
    resizeWindow,
    unMaximizeWindow,
    windows,
  } = useContext(OpenWindowsContext);

  const getAppComponent = (window: OpenWindow) => {
    const component = components[window.app.id];
    return component
      ? h(component, {
          key: window.id,
          openApp,
          workingDir: window.workingDir,
          workingFile: window.workingFile,
        })
      : null;
  };

  return (
    <div className={style.windowsContainer}>
      {windows.map((window, i) =>
        window.isMinimized ? null : (
          <Window
            coords={window.coords}
            iconId={window.iconId}
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
            onResized={(size) => resizeWindow(i, size)}
            isInactive={!window.hasFocus}
            isMaximized={window.isMaximized}
            title={window.title}
            zIndex={window.zIndex}
          >
            {getAppComponent(window)}
          </Window>
        )
      )}
    </div>
  );
};

export default WindowsContainer;
