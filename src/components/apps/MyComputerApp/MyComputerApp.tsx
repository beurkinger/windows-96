import { h, FunctionComponent } from 'preact';

import { appList } from '../../../data/appList';
import Countour from '../../shared/Countour/Countour';
import FileGrid, { GridFile } from '../../shared/FileGrid/FileGrid';
import MenuBar from '../../shared/MenuBar/MenuBar';

import style from './MyComputerApp.css';

const MyComputerApp: FunctionComponent = () => {
  const initialFiles: GridFile[] = [
    {
      id: appList.myComputer.id,
      iconId: appList.myComputer.iconId,
      hasFocus: false,
      hasSoftFocus: true,
      name: appList.myComputer.name,
      type: 'app',
    },
    {
      id: appList.networkNeighborhood.id,
      iconId: appList.networkNeighborhood.iconId,
      hasFocus: false,
      hasSoftFocus: false,
      name: appList.networkNeighborhood.name,
      type: 'app',
    },
    {
      id: appList.briefcase.id,
      iconId: appList.briefcase.iconId,
      hasFocus: false,
      hasSoftFocus: false,
      name: appList.briefcase.name,
      type: 'app',
    },
    {
      id: appList.binEmpty.id,
      iconId: appList.binEmpty.iconId,
      hasFocus: false,
      hasSoftFocus: false,
      name: appList.binEmpty.name,
      type: 'app',
    },
  ];

  return (
    <div className={style.myComputerApp}>
      <MenuBar options={['File', 'Edit', 'View', 'Help']} />
      <Countour>
        <FileGrid initialFiles={initialFiles} onDblClickFile={() => null} />
      </Countour>
    </div>
  );
};

export default MyComputerApp;
