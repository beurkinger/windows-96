import { h, FunctionComponent } from 'preact';

import Window from '../Window/Window';

import style from './WindowsContainer.css';

const WindowsContainer: FunctionComponent = () => (
  <div className={style.windowsContainer}>
    <Window onClickClose={() => null} title="Hello Word">
      <p>How do you do ?</p>
    </Window>
  </div>
);

export default WindowsContainer;
