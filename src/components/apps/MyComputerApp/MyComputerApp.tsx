import { h, FunctionComponent } from 'preact';

import { AppProps } from '../../../data/appList';
import filesystem from '../../../data/filesystem';
import fileTypeList from '../../../data/fileTypeList';
import { ShellItem } from '../../../hooks/useShellFilesState';
import Countour from '../../shared/Countour/Countour';
import FileGrid from '../../shared/FileGrid/FileGrid';
import MenuBar from '../../shared/MenuBar/MenuBar';
import Scrollable from '../../shared/Scrollable/Scrollable';
import StatusBar from '../../shared/StatusBar/StatusBar';
import WindowContent from '../../shared/WindowContent/WindowContent';

const MyComputerApp: FunctionComponent<AppProps> = ({
  addWindow,
  workingDir,
}: AppProps) => {
  const handleOnDblClickFile = (file: ShellItem) => {
    if (file.type === 'app') addWindow({ appId: file.appId });
    if (file.type === 'dir') {
      addWindow({ appId: 'myComputer', workingDir: file.fileSystemDir });
    }
    if (file.type === 'file') {
      addWindow({
        appId: fileTypeList[file.fileTypeId].appId,
        workingFile: file.fileSystemFile,
      });
    }
  };

  const textLeft = workingDir
    ? `${Object.keys(workingDir.dir).length} object(s)`
    : `${Object.keys(filesystem.dir).length} object(s)`;

  return (
    <WindowContent
      menu={<MenuBar options={['File', 'Edit', 'View', 'Help']} />}
      body={
        <Countour>
          <Scrollable>
            <FileGrid
              fileSystemNode={workingDir ?? filesystem}
              onDblClickFile={handleOnDblClickFile}
            />
          </Scrollable>
        </Countour>
      }
      footer={<StatusBar textLeft={textLeft} />}
    />
  );
};

export default MyComputerApp;
