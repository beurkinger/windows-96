import { h, FunctionComponent } from 'preact';
import { AppProps } from '../../../types/App';

import Bump from '../../shared/Bump/Bump';
// import MenuBar from '../../shared/MenuBar/MenuBar';
// import StatusBar from '../../shared/StatusBar/StatusBar';
import WindowContent from '../../shared/WindowContent/WindowContent';

// import style from './TimerApp.css';

const TimerApp: FunctionComponent<AppProps> = () => (
  <WindowContent
    // menu={<MenuBar options={['Game', 'Help']} />}
    body={
      <Bump size={'medium'} type="inner">
        test
      </Bump>
    }
    // footer={
    // <StatusBar textRight="To edit, click Open File for Editing on the File menu." />
    // }
  />
);

export default TimerApp;
