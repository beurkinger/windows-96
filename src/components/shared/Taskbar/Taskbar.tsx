import { h, FunctionComponent } from 'preact';

import { AppId } from '../../../data/appList';
import {
  ContextType as OpenWindowsContextType,
  OpenWindow,
} from '../../../context/OpenWindowsContext';
import useDocumentClickToggle from '../../../hooks/useDocumentClickToggle';
import Button from '../Button/Button';
import NotificationArea from '../NotificationArea/NotificationArea';
import StartMenu from '../StartMenu/StartMenu';

import style from './Taskbar.css';

interface Props {
  addWindow: OpenWindowsContextType['addWindow'];
  focusOnWindow: OpenWindowsContextType['focusOnWindow'];
  minimizeWindow: OpenWindowsContextType['minimizeWindow'];
  unMinimizeWindow: OpenWindowsContextType['unMinimizeWindow'];
  windows: OpenWindowsContextType['windows'];
}

const Taskbar: FunctionComponent<Props> = ({
  addWindow,
  focusOnWindow,
  minimizeWindow,
  unMinimizeWindow,
  windows,
}: Props) => {
  const [isStartMenuOpen, setIsStartMenuOpen] = useDocumentClickToggle();

  const handleStartButtonClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsStartMenuOpen(!isStartMenuOpen);
  };

  const handleStartMenuSelect = (appId: AppId) => {
    if (appId) {
      addWindow({ appId: appId });
      setIsStartMenuOpen(false);
    }
  };

  const handleTaskButtonClick = (window: OpenWindow, i: number) => {
    if (window.isMinimized) {
      unMinimizeWindow(i);
    } else if (!window.hasFocus) {
      focusOnWindow(i);
    } else if (window.hasFocus) {
      minimizeWindow(i);
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
        {windows.map((window, i) => (
          <Button
            iconId={window.app.iconId}
            key={window.id}
            label={window.app.name}
            inTaskbar
            isActive={window.hasFocus}
            noOutline
            onClick={() => handleTaskButtonClick(window, i)}
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
