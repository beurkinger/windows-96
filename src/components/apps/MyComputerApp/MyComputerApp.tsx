import { h, FunctionComponent } from 'preact';

import { ShellItem } from '../../../types/Shell';
import { AppProps } from '../../../data/appList';
import fileSystem from '../../../data/fileSystem';
import fileTypeList from '../../../data/fileTypeList';
import useShellFilesState from '../../../hooks/useShellFilesState';

import Countour from '../../shared/Countour/Countour';
import FileGrid from '../../shared/FileGrid/FileGrid';
import MenuBar from '../../shared/MenuBar/MenuBar';
import Scrollable from '../../shared/Scrollable/Scrollable';
import StatusBar from '../../shared/StatusBar/StatusBar';
import WindowContent from '../../shared/WindowContent/WindowContent';

const getSelectionStatusText = (items: ShellItem[]) => {
  if (items.some((item) => item.hasFocus)) return '1 object(s) selected';
  return `${items.length} object(s)`;
};

const MyComputerApp: FunctionComponent<AppProps> = ({
  openApp,
  workingDir,
}: AppProps) => {
  const { files, focusOnFile, removeFocus } = useShellFilesState(
    workingDir ?? fileSystem,
    !!workingDir
  );

  const handleOnDblClickFile = (file: ShellItem) => {
    if (file.type === 'app') openApp({ appId: file.appId });
    if (file.type === 'dir') {
      openApp({ appId: 'myComputer', workingDir: file.fileSystemDir });
    }
    if (file.type === 'file') {
      openApp({
        appId: fileTypeList[file.fileTypeId].appId,
        workingFile: file.fileSystemFile,
      });
    }
  };

  const textLeft = getSelectionStatusText(files);
  return (
    <WindowContent
      menu={<MenuBar options={['File', 'Edit', 'View', 'Help']} />}
      body={
        <Countour>
          <Scrollable>
            <FileGrid
              files={files}
              onClick={removeFocus}
              onClickFile={(file) => focusOnFile(file.id)}
              onDblClickFile={handleOnDblClickFile}
            />
          </Scrollable>
        </Countour>
      }
      footer={<StatusBar textLeft={textLeft} textRight="" />}
    />
  );
};

export default MyComputerApp;
