import { h, FunctionComponent } from 'preact';

import Shell from '../Shell/Shell';

import style from './App.css';

const App: FunctionComponent = () => (
  <div className={style.app}>
    <Shell />
  </div>
);

export default App;
