import { h, FunctionComponent } from 'preact';

import { AppId, AppProps } from '../../../data/appList';
import filesystem, { FileSystemDir } from '../../../data/filesystem';
import { FileGridItem } from '../../../hooks/useFileGridState';
import Countour from '../../shared/Countour/Countour';
import FileGrid from '../../shared/FileGrid/FileGrid';
import MenuBar from '../../shared/MenuBar/MenuBar';

import style from './MyComputerApp.css';

const MyComputerApp: FunctionComponent<AppProps> = ({
  addWindow,
  workingDir,
}: AppProps) => {
  const handleOnDblClickFile = (file: FileGridItem) => {
    if (file.type === 'app') addWindow(file.value as AppId);
    if (file.type === 'dir')
      addWindow('myComputer', file.value as FileSystemDir);
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
