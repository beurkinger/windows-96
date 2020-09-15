import { h, FunctionComponent } from 'preact';

import { AppProps } from '../../../data/appList';

import style from './ExplorerApp.css';

const ExplorerApp: FunctionComponent<AppProps> = () => {
  return <div className={style.explorerApp}>Hello</div>;
};

export default ExplorerApp;
