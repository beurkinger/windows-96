import { h, FunctionComponent } from 'preact';

import happy from '../../../assets/img/interface/minesweeper_happy.png';
// import cool from '../../../assets/img/interface/minesweeper_cool.png';
// import sick from '../../../assets/img/interface/minesweeper_sick.png';
// import dead from '../../../assets/img/interface/minesweeper_dead.png';

import n0 from '../../../assets/img/interface/minesweeper_0.png';
// import n1 from '../../../assets/img/interface/minesweeper_1.png';
// import n2 from '../../../assets/img/interface/minesweeper_2.png';
// import n3 from '../../../assets/img/interface/minesweeper_3.png';
// import n4 from '../../../assets/img/interface/minesweeper_4.png';
// import n5 from '../../../assets/img/interface/minesweeper_5.png';
// import n6 from '../../../assets/img/interface/minesweeper_6.png';
// import n7 from '../../../assets/img/interface/minesweeper_7.png';
// import n8 from '../../../assets/img/interface/minesweeper_8.png';
// import n9 from '../../../assets/img/interface/minesweeper_9.png';

import { AppProps } from '../../../types/App';
import Bump from '../../shared/Bump/Bump';
import Button from '../../shared/Button/Button';
// import MenuBar from '../../shared/MenuBar/MenuBar';
// import StatusBar from '../../shared/StatusBar/StatusBar';
import WindowContent from '../../shared/WindowContent/WindowContent';

import style from './TimerApp.css';

const TimerApp: FunctionComponent<AppProps> = () => (
  <WindowContent
    // menu={<MenuBar options={['Game', 'Help']} />}
    body={
      <Bump size="large" type="outer">
        <div className={style.timerAppContent}>
          <Bump size="medium" type="inner">
            <div className={style.timers}>
              <Bump size="small" type="inner">
                <div className={style.timer}>
                  <img src={n0} />
                  <img src={n0} />
                  <img src={n0} />
                </div>
              </Bump>
              <Button label={<img src={happy} />} onClick={() => null} />
              <Bump size="small" type="inner">
                <div className={style.timer}>
                  <img src={n0} />
                  <img src={n0} />
                  <img src={n0} />
                </div>
              </Bump>
              <Bump size="small" type="inner">
                <div className={style.timer}>
                  <img src={n0} />
                  <img src={n0} />
                  <img src={n0} />
                </div>
              </Bump>
            </div>
          </Bump>
        </div>
      </Bump>
    }
    // footer={
    // <StatusBar textRight="To edit, click Open File for Editing on the File menu." />
    // }
  />
);

export default TimerApp;
