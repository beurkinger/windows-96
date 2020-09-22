import { h, FunctionComponent } from 'preact';
import { useRef, useState } from 'preact/hooks';

import happy from '../../../assets/img/interface/minesweeper_happy.png';
// import cool from '../../../assets/img/interface/minesweeper_cool.png';
// import sick from '../../../assets/img/interface/minesweeper_sick.png';
// import dead from '../../../assets/img/interface/minesweeper_dead.png';

import { AppProps } from '../../../types/App';
import Bump from '../../shared/Bump/Bump';
import Button from '../../shared/Button/Button';
import TimerNumber from '../../shared/TimerNumber/TimerNumber';
import WindowContent from '../../shared/WindowContent/WindowContent';

import style from './TimerApp.css';

const parseNumber = (i: number): string[] => ('000' + i).slice(-3).split('');

const getCurrentCountdown = (targetMs: number) => {
  const diff = targetMs - Date.now();

  let tmp = Math.floor(diff / 1000);
  const sec = tmp % 60;

  tmp = Math.floor((tmp - sec) / 60);
  const min = tmp % 60;

  tmp = Math.floor((tmp - min) / 60);
  const hour = tmp;

  return {
    h: parseNumber(hour),
    m: parseNumber(min),
    s: parseNumber(sec),
  };
};

const TimerApp: FunctionComponent<AppProps> = () => {
  const targetMs = useRef(Date.now() + 1000 * 60 * 60 * 24 * 5);
  const [countdown] = useState(getCurrentCountdown(targetMs.current));
  return (
    <WindowContent
      body={
        <Bump size="large" type="outer">
          <div className={style.timerAppContent}>
            <Bump size="medium" type="inner">
              <div className={style.timers}>
                <Bump size="small" type="inner">
                  <div className={style.timer}>
                    <TimerNumber i={parseInt(countdown['h'][0])} />
                    <TimerNumber i={parseInt(countdown['h'][1])} />
                    <TimerNumber i={parseInt(countdown['h'][2])} />
                  </div>
                </Bump>
                <Button label={<img src={happy} />} onClick={() => null} />
                <Bump size="small" type="inner">
                  <div className={style.timer}>
                    <TimerNumber i={parseInt(countdown['m'][0])} />
                    <TimerNumber i={parseInt(countdown['m'][1])} />
                    <TimerNumber i={parseInt(countdown['m'][2])} />
                  </div>
                </Bump>
                <Button label={<img src={happy} />} onClick={() => null} />
                <Bump size="small" type="inner">
                  <div className={style.timer}>
                    <TimerNumber i={parseInt(countdown['s'][0])} />
                    <TimerNumber i={parseInt(countdown['s'][1])} />
                    <TimerNumber i={parseInt(countdown['s'][2])} />
                  </div>
                </Bump>
              </div>
            </Bump>
          </div>
        </Bump>
      }
    />
  );
};

export default TimerApp;
