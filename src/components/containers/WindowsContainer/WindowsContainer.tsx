import { h, FunctionComponent } from 'preact';
import { useContext } from 'preact/hooks';

import { AppId, AppProps } from '../../../types/App';
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
          closeWindow: () => closeWindow(window.id),
          key: window.id,
          openApp,
          workingDir: window.workingDir,
          workingFile: window.workingFile,
        })
      : null;
  };

  return (
    <div className={style.windowsContainer}>
      {windows.map((window) =>
        window.isMinimized ? null : (
          <Window
            coords={window.coords}
            iconId={window.iconId}
            key={window.id}
            isDraggable={window.app.isDraggable ?? true}
            isInactive={!window.hasFocus}
            isMaximized={window.isMaximized}
            isResizeable={window.app.isResizeable ?? true}
            onClickClose={() => closeWindow(window.id)}
            onClickMaximize={() => maximizeWindow(window.id)}
            onClickMinimize={() => minimizeWindow(window.id)}
            onClickRestore={() => unMaximizeWindow(window.id)}
            onDblClickTitleBar={() => {
              if (window.isMaximized) {
                unMaximizeWindow(window.id);
              } else {
                maximizeWindow(window.id);
              }
            }}
            onMouseDown={() => {
              if (!window.isMaximized) focusOnWindow(window.id);
            }}
            onMoved={(coords) => moveWindow(window.id, coords)}
            onResized={(size) => resizeWindow(window.id, size)}
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
