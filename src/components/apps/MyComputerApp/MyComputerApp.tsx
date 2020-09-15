import { h, FunctionComponent } from 'preact';

import { AppId, AppProps } from '../../../data/appList';
import fileSystem from '../../../data/filesystem';
import Countour from '../../shared/Countour/Countour';
import FileGrid from '../../shared/FileGrid/FileGrid';
import MenuBar from '../../shared/MenuBar/MenuBar';

import style from './MyComputerApp.css';

const MyComputerApp: FunctionComponent<AppProps> = ({
  addWindow,
}: AppProps) => {
  const handleOnDblClickFile = (fileId: string, fileType: string) => {
    if (fileType === 'app') addWindow(fileId as AppId);
  };

  return (
    <div className={style.myComputerApp}>
      <MenuBar options={['File', 'Edit', 'View', 'Help']} />
      <Countour>
        <FileGrid
          fileSystemNode={fileSystem}
          onDblClickFile={handleOnDblClickFile}
        />
      </Countour>
    </div>
  );
};

export default MyComputerApp;
