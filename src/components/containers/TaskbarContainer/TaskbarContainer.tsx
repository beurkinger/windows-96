import { h, FunctionComponent } from 'preact';
import { useContext } from 'preact/hooks';

import OpenWindowsContext from '../../../context/OpenWindowsContext';
import Taskbar from '../../shared/Taskbar/Taskbar';

const TaskbarContainer: FunctionComponent = () => {
  const {
    addWindow,
    focusOnWindow,
    minimizeWindow,
    unMinimizeWindow,
    windows,
  } = useContext(OpenWindowsContext);
  return (
    <Taskbar
      addWindow={addWindow}
      focusOnWindow={focusOnWindow}
      minimizeWindow={minimizeWindow}
      unMinimizeWindow={unMinimizeWindow}
      windows={windows}
    />
  );
};

export default TaskbarContainer;
