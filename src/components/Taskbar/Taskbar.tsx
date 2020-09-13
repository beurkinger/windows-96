import { h, FunctionComponent } from 'preact';
import { useContext } from 'preact/hooks';

import RunningAppsContext from '../../context/RunningAppsContext';
import useFloating from '../../hooks/useFloating';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import NotificationArea from '../NotificationArea/NotificationArea';
import StartMenu from '../StartMenu/StartMenu';

import style from './Taskbar.css';

const Taskbar: FunctionComponent = () => {
  const runningApps = useContext(RunningAppsContext);
  const [isStartMenuOpen, setIsStartMenuOpen] = useFloating();

  const handleStartButtonClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsStartMenuOpen(!isStartMenuOpen);
  };

  return (
    <div className={style.taskbar}>
      <div className={style.startMenuWrapper}>
        {isStartMenuOpen && <StartMenu />}
      </div>
      <div className={style.startButtonWrapper}>
        <Button
          fontWeight="bold"
          icon={Icon}
          isActive={isStartMenuOpen}
          inTaskbar
          label="Start"
          onClick={handleStartButtonClick}
        />
      </div>
      <div className={style.taskButtonsWrapper}>
        {runningApps.map((app) => (
          <Button
            icon={app.icon}
            key={app.zIndex}
            label={app.title}
            inTaskbar
            noOutline
            onClick={() => null}
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
