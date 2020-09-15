import { h, FunctionComponent } from 'preact';

import MenuBar from '../../shared/MenuBar/MenuBar';
// import { useState } from 'preact/hooks';

import style from './MyComputerApp.css';

const MyComputerApp: FunctionComponent = () => {
  return (
    <div className={style.myComputerApp}>
      <MenuBar options={['File', 'Edit', 'View', 'Help']} />
    </div>
  );
};

export default MyComputerApp;
