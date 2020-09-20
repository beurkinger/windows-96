import { h, FunctionComponent } from 'preact';

import { FileSystemDir, FileSystemFile } from '../../../types/FileSystem';
import {
  OpenWindow,
  OpenWindowsContextType,
} from '../../../context/OpenWindowsContext';
import useDocumentClickToggle from '../../../hooks/useDocumentClickToggle';
import Button from '../Button/Button';
import NotificationArea from '../NotificationArea/NotificationArea';
import StartMenu from '../StartMenu/StartMenu';

import style from './Taskbar.css';
import { AppId } from '../../../types/App';

interface Props {
  focusOnWindow: OpenWindowsContextType['focusOnWindow'];
  minimizeWindow: OpenWindowsContextType['minimizeWindow'];
  openApp: OpenWindowsContextType['openApp'];
  unMinimizeWindow: OpenWindowsContextType['unMinimizeWindow'];
  windows: OpenWindowsContextType['windows'];
}

const Taskbar: FunctionComponent<Props> = ({
  focusOnWindow,
  minimizeWindow,
  openApp,
  unMinimizeWindow,
  windows,
}: Props) => {
  const [isStartMenuOpen, setIsStartMenuOpen] = useDocumentClickToggle();

  const handleStartButtonClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsStartMenuOpen(!isStartMenuOpen);
  };

  const handleStartMenuSelect = (
    appId: AppId,
    workingDir?: FileSystemDir,
    workingFile?: FileSystemFile
  ) => {
    if (appId) {
      openApp({ appId, workingDir, workingFile });
      setIsStartMenuOpen(false);
    }
  };

  const handleTaskButtonClick = (window: OpenWindow) => {
    if (window.isMinimized) {
      unMinimizeWindow(window.id);
    } else if (!window.hasFocus) {
      focusOnWindow(window.id);
    } else if (window.hasFocus) {
      minimizeWindow(window.id);
    }
  };

  return (
    <div className={style.taskbar}>
      <div className={style.startMenuWrapper}>
        {isStartMenuOpen && <StartMenu onSelect={handleStartMenuSelect} />}
      </div>
      <div className={style.startButtonWrapper}>
        <Button
          fontWeight="bold"
          iconId="windowsLogo"
          isActive={isStartMenuOpen}
          inTaskbar
          label="Start"
          onClick={handleStartButtonClick}
        />
      </div>
      <div className={style.taskButtonsWrapper}>
        {windows.map((window) => (
          <Button
            iconId={window.iconId}
            key={window.id}
            label={window.title}
            inTaskbar
            isActive={window.hasFocus}
            noOutline
            onClick={() => handleTaskButtonClick(window)}
            textAlign="left"
          />
        ))}
      </div>
      <div className={style.notificationAreaWrapper}>
        <NotificationArea />
      </div>
    </div>
  );
};

export default Taskbar;
