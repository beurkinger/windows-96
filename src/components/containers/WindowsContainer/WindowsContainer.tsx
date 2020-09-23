import { h, FunctionComponent } from 'preact';
import { useContext } from 'preact/hooks';

import { AppId, AppProps } from '../../../types/App';
import OpenWindowsContext, {
  OpenWindow,
} from '../../../context/OpenWindowsContext';
import MyBriefcaseApp from '../../apps/MyBriefcaseApp/MyBriefcaseApp';
import MyComputerApp from '../../apps/MyComputerApp/MyComputerApp';
import NotepadApp from '../../apps/NotepadApp/NotepadApp';
import QuickViewApp from '../../apps/QuickViewApp/QuickViewApp';
import RecycleBinApp from '../../apps/RecycleBinApp/ReycleBinApp';
import TimerApp from '../../apps/TimerApp/TimerApp';
import VoidApp from '../../apps/VoidApp/VoidApp';
import Window from '../../shared/Window/Window';

import style from './WindowsContainer.css';

const components: { [key in AppId]: FunctionComponent<AppProps> } = {
  briefcase: MyBriefcaseApp,
  calc: VoidApp,
  cdPlayer: VoidApp,
  defrag: VoidApp,
  dialUpNetwork: VoidApp,
  exchange: VoidApp,
  explorer: VoidApp,
  find: VoidApp,
  findComputer: VoidApp,
  findMsn: VoidApp,
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
  register: VoidApp,
  quickView: QuickViewApp,
  recycleBin: RecycleBinApp,
  run: VoidApp,
  scandisk: VoidApp,
  shutdown: VoidApp,
  soundRecorder: VoidApp,
  taskbar: VoidApp,
  timer: TimerApp,
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
            isDraggable={window.isDraggable}
            isInactive={!window.hasFocus}
            isMaximized={window.isMaximized}
            isResizeable={window.isResizeable}
            onClickClose={() => closeWindow(window.id)}
            onClickMaximize={
              window.isResizeable ? () => maximizeWindow(window.id) : undefined
            }
            onClickMinimize={() => minimizeWindow(window.id)}
            onClickRestore={
              window.isResizeable
                ? () => unMaximizeWindow(window.id)
                : undefined
            }
            onDblClickTitleBar={() => {
              if (!window.isResizeable) return;
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
            onResized={(size) =>
              window.isResizeable ? resizeWindow(window.id, size) : undefined
            }
            size={window.size}
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
