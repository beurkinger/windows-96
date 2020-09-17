import { h, FunctionComponent } from 'preact';

import { ShellItem } from '../../../types/ShellItems';
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
  addWindow,
  workingDir,
}: AppProps) => {
  const { files, focusOnFile, removeFocus } = useShellFilesState(
    workingDir ?? fileSystem
  );

  const handleOnDblClickFile = (file: ShellItem) => {
    if (file.type === 'app') addWindow({ appId: file.appId });
    if (file.type === 'dir') {
      addWindow({ appId: 'myComputer', workingDir: file.fileSystemNode });
    }
    if (file.type === 'file') {
      addWindow({
        appId: fileTypeList[file.fileTypeId].appId,
        workingFile: file.fileSystemNode,
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
      footer={<StatusBar textLeft={textLeft} />}
    />
  );
};

export default MyComputerApp;
