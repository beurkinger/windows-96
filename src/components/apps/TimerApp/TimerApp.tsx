import { h, FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';

import happy from '../../../assets/img/interface/minesweeper_happy.png';
import sick from '../../../assets/img/interface/minesweeper_dead.png';

import { AppProps } from '../../../types/App';
import useInterval from '../../../hooks/useInterval';
import Bump from '../../shared/Bump/Bump';
import Button from '../../shared/Button/Button';
import TimerNumber from '../../shared/TimerNumber/TimerNumber';
import WindowContent from '../../shared/WindowContent/WindowContent';

import style from './TimerApp.css';

const TARGET_MS = Date.now() + 1000 * 60 * 60 * 24 * 4.7666;
const SMILEY_SRC = [happy, sick];

const parseNumber = (i: number): string[] => ('000' + i).slice(-3).split('');

const getCurrentCountdown = (targetMs: number) => {
  const currentMs = Date.now();
  const diff = targetMs - currentMs > 0 ? targetMs - currentMs : 0;

  let tmp = Math.floor(diff / 100);
  const cSec = tmp % 600;

  tmp = Math.floor((tmp - cSec) / 600);
  const min = tmp % 60;

  tmp = Math.floor((tmp - min) / 60);
  const hour = tmp;

  return {
    h: parseNumber(hour),
    m: parseNumber(min),
    s: parseNumber(cSec),
  };
};

const TimerApp: FunctionComponent<AppProps> = () => {
  const [countdown, setCountdown] = useState(getCurrentCountdown(TARGET_MS));
  const [smileyIndex, setSmileyIndex] = useState(0);

  useInterval(() => {
    setCountdown(getCurrentCountdown(TARGET_MS));
  }, 100);

  useInterval(() => {
    setSmileyIndex((currentSmileyIndex) => {
      const nextSmileyIndex = currentSmileyIndex + 1;
      return nextSmileyIndex >= SMILEY_SRC.length ? 0 : nextSmileyIndex;
    });
  }, 1000);

  return (
    <WindowContent
      body={
        <Bump size="large" type="outer">
          <div className={style.timerAppContent}>
            <Bump size="medium" type="inner">
              <div className={style.timers}>
                <Button
                  label={<img src={SMILEY_SRC[smileyIndex]} />}
                  onClick={() => null}
                />
                <Bump size="small" type="inner">
                  <div className={style.timer}>
                    <TimerNumber i={parseInt(countdown['h'][0])} />
                    <TimerNumber i={parseInt(countdown['h'][1])} />
                    <TimerNumber i={parseInt(countdown['h'][2])} />
                  </div>
                </Bump>
                <Bump size="small" type="inner">
                  <div className={style.timer}>
                    <TimerNumber i={parseInt(countdown['m'][0])} />
                    <TimerNumber i={parseInt(countdown['m'][1])} />
                    <TimerNumber i={parseInt(countdown['m'][2])} />
                  </div>
                </Bump>
                <Bump size="small" type="inner">
                  <div className={style.timer}>
                    <TimerNumber i={parseInt(countdown['s'][0])} />
                    <TimerNumber i={parseInt(countdown['s'][1])} />
                    <TimerNumber i={parseInt(countdown['s'][2])} />
                  </div>
                </Bump>
                <Button
                  label={<img src={SMILEY_SRC[smileyIndex]} />}
                  onClick={() => null}
                />
              </div>
            </Bump>
          </div>
        </Bump>
      }
    />
  );
};

export default TimerApp;
