import { h, FunctionComponent } from 'preact';
import { useContext } from 'preact/hooks';

import OpenWindowsContext from '../../../context/OpenWindowsContext';
import Taskbar from '../../shared/Taskbar/Taskbar';

const TaskbarContainer: FunctionComponent = () => {
  const {
    focusOnWindow,
    minimizeWindow,
    openApp,
    unMinimizeWindow,
    windows,
  } = useContext(OpenWindowsContext);
  return (
    <Taskbar
      focusOnWindow={focusOnWindow}
      minimizeWindow={minimizeWindow}
      openApp={openApp}
      unMinimizeWindow={unMinimizeWindow}
      windows={windows}
    />
  );
};

export default TaskbarContainer;
