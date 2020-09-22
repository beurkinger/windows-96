import { h, FunctionComponent } from 'preact';

import n0 from '../../../assets/img/interface/minesweeper_0.png';
import n1 from '../../../assets/img/interface/minesweeper_1.png';
import n2 from '../../../assets/img/interface/minesweeper_2.png';
import n3 from '../../../assets/img/interface/minesweeper_3.png';
import n4 from '../../../assets/img/interface/minesweeper_4.png';
import n5 from '../../../assets/img/interface/minesweeper_5.png';
import n6 from '../../../assets/img/interface/minesweeper_6.png';
import n7 from '../../../assets/img/interface/minesweeper_7.png';
import n8 from '../../../assets/img/interface/minesweeper_8.png';
import n9 from '../../../assets/img/interface/minesweeper_9.png';
import nx from '../../../assets/img/interface/minesweeper_x.png';

import style from './TimerNumber.css';

interface Props {
  i: number;
}

const TimerNumber: FunctionComponent<Props> = ({ i }: Props) => (
  <div className={style.timerNumber}>
    <img src={n0} style={{ visibility: i === 0 ? 'visible' : 'hidden' }} />
    <img src={n1} style={{ visibility: i === 1 ? 'visible' : 'hidden' }} />
    <img src={n2} style={{ visibility: i === 2 ? 'visible' : 'hidden' }} />
    <img src={n3} style={{ visibility: i === 3 ? 'visible' : 'hidden' }} />
    <img src={n4} style={{ visibility: i === 4 ? 'visible' : 'hidden' }} />
    <img src={n5} style={{ visibility: i === 5 ? 'visible' : 'hidden' }} />
    <img src={n6} style={{ visibility: i === 6 ? 'visible' : 'hidden' }} />
    <img src={n7} style={{ visibility: i === 7 ? 'visible' : 'hidden' }} />
    <img src={n8} style={{ visibility: i === 8 ? 'visible' : 'hidden' }} />
    <img src={n9} style={{ visibility: i === 9 ? 'visible' : 'hidden' }} />
    <img src={nx} style={{ visibility: i === -1 ? 'visible' : 'hidden' }} />
  </div>
);

export default TimerNumber;
