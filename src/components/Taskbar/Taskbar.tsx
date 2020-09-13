import { h, FunctionComponent } from 'preact';
import { useContext } from 'preact/hooks';

import RunningAppsContext, {
  RunningApp,
} from '../../context/RunningAppsContext';
import useFloating from '../../hooks/useFloating';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import NotificationArea from '../NotificationArea/NotificationArea';
import StartMenu from '../StartMenu/StartMenu';

import style from './Taskbar.css';

const Taskbar: FunctionComponent = () => {
  const { apps, focusOnApp, minimizeApp, unMinimizeApp } = useContext(
    RunningAppsContext
  );
  const [isStartMenuOpen, setIsStartMenuOpen] = useFloating();

  const handleStartButtonClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsStartMenuOpen(!isStartMenuOpen);
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
        {isStartMenuOpen && <StartMenu />}
      </div>
      <div className={style.startButtonWrapper}>
        <Button
          fontWeight="bold"
          icon={<Icon iconId="windowsLogo" />}
          isActive={isStartMenuOpen}
          inTaskbar
          label="Start"
          onClick={handleStartButtonClick}
        />
      </div>
      <div className={style.taskButtonsWrapper}>
        {apps.map((app, i) => (
          <Button
            icon={app.icon}
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
