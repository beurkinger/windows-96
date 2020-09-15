import { h, FunctionComponent } from 'preact';
import { useContext } from 'preact/hooks';

import { AppId } from '../../../data/appList';
import OpenWindowsContext, {
  OpenWindow,
} from '../../../context/OpenWindowsContext';
import useFloating from '../../../hooks/useFloating';
import Button from '../../shared/Button/Button';
import NotificationArea from '../../shared/NotificationArea/NotificationArea';
import StartMenu from '../../shared/StartMenu/StartMenu';

import style from './Taskbar.css';

const Taskbar: FunctionComponent = () => {
  const {
    windows,
    addWindow,
    focusOnWindow,
    minimizeWindow,
    unMinimizeWindow,
  } = useContext(OpenWindowsContext);
  const [isStartMenuOpen, setIsStartMenuOpen] = useFloating();

  const handleStartButtonClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsStartMenuOpen(!isStartMenuOpen);
  };

  const handleStartMenuSelect = (appId: string) => {
    if (appId) {
      addWindow(appId as AppId);
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
            key={i}
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
