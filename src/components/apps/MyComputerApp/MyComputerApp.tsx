import { h, FunctionComponent } from 'preact';

import { AppProps } from '../../../data/appList';
import filesystem from '../../../data/filesystem';
import { ShellItem } from '../../../hooks/useFileGridState';
import Countour from '../../shared/Countour/Countour';
import FileGrid from '../../shared/FileGrid/FileGrid';
import MenuBar from '../../shared/MenuBar/MenuBar';

import style from './MyComputerApp.css';

const MyComputerApp: FunctionComponent<AppProps> = ({
  addWindow,
  workingDir,
}: AppProps) => {
  const handleOnDblClickFile = (file: ShellItem) => {
    if (file.type === 'app') addWindow({ appId: file.appId });
    if (file.type === 'dir')
      addWindow({ appId: 'myComputer', workingDir: file.fileSystemDir });
  };

  return (
    <div className={style.myComputerApp}>
      <MenuBar options={['File', 'Edit', 'View', 'Help']} />
      <Countour>
        <FileGrid
          fileSystemNode={workingDir ?? filesystem}
          onDblClickFile={handleOnDblClickFile}
        />
      </Countour>
    </div>
  );
};

export default MyComputerApp;
