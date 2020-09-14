import { h, FunctionComponent } from 'preact';
import { useContext } from 'preact/hooks';

import { AppId } from '../../data/appList';
import RunningAppsContext, {
  RunningApp,
} from '../../context/RunningAppsContext';
import useFloating from '../../hooks/useFloating';
import Button from '../Button/Button';
import NotificationArea from '../NotificationArea/NotificationArea';
import StartMenu from '../StartMenu/StartMenu';

import style from './Taskbar.css';

const Taskbar: FunctionComponent = () => {
  const { apps, addApp, focusOnApp, minimizeApp, unMinimizeApp } = useContext(
    RunningAppsContext
  );
  const [isStartMenuOpen, setIsStartMenuOpen] = useFloating();

  const handleStartButtonClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsStartMenuOpen(!isStartMenuOpen);
  };

  const handleStartMenuSelect = (appId: string) => {
    console.log(appId);
    if (appId) {
      addApp(appId as AppId);
      setIsStartMenuOpen(false);
    }
  };

  const handleTaskButtonClick = (app: RunningApp, i: number) => {
    if (app.isMinimized) {
      unMinimizeApp(i);
    } else if (!app.hasFocus) {
      focusOnApp(i);
    } else if (app.hasFocus) {
      minimizeApp(i);
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
        {apps.map((app, i) => (
          <Button
            iconId={app.iconId}
            key={i}
            label={app.title}
            inTaskbar
            isActive={app.hasFocus}
            noOutline
            onClick={() => handleTaskButtonClick(app, i)}
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
