import { h, FunctionComponent } from 'preact';

import { AppProps } from '../../../types/App';
import { ShellItem } from '../../../types/Shell';
import { DirType } from '../../../types/FileSystem';
import myComputerFs from '../../../data/fileSystem';
import fileTypeList from '../../../data/fileTypeList';
import useShellFilesState from '../../../hooks/useShellFilesState';

import Countour from '../../shared/Countour/Countour';
import FileGrid from '../../shared/FileGrid/FileGrid';
import MenuBar from '../../shared/MenuBar/MenuBar';
import Scrollable from '../../shared/Scrollable/Scrollable';
import StatusBar from '../../shared/StatusBar/StatusBar';
import WindowContent from '../../shared/WindowContent/WindowContent';

const MENU_BAR = {
  BRIEFCASE: ['File', 'Edit', 'View', 'Briefcase', 'Help'],
  DIAL_UP_NETWORK: ['File', 'Edit', 'View', 'Connexions', 'Help'],
  DEFAULT: ['File', 'Edit', 'View', 'Help'],
};

const getSelectionStatusText = (dirType: DirType, items: ShellItem[]) => {
  const objectName = dirType === 'fonts' ? 'font' : 'object';
  if (items.some((item) => item.hasFocus)) return `1 ${objectName}(s) selected`;
  return `${items.length} ${objectName}(s)`;
};

const getSelectedItemStatusText = (dirType: DirType) => {
  if (dirType === 'default') return '';
  return undefined;
};

const getMenuBarOption = (dirType: DirType): string[] => {
  if (dirType === 'dialUpNetwork') {
    return MENU_BAR.DIAL_UP_NETWORK;
  }
  if (dirType === 'briefcase') {
    return MENU_BAR.BRIEFCASE;
  }
  return MENU_BAR.DEFAULT;
};

const MyComputerApp: FunctionComponent<AppProps> = ({
  openApp,
  workingDir,
}: AppProps) => {
  const { files, focusOnFile, removeFocus } = useShellFilesState(
    workingDir ?? myComputerFs,
    !!workingDir
  );
  const dirType: DirType = workingDir?.dirType ?? 'default';

  const handleOnDblClickFile = (file: ShellItem) => {
    if (dirType !== 'default') return;

    if (file.type === 'app') {
      openApp({ appId: file.appId });
    }
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

  return (
    <WindowContent
      menu={<MenuBar options={getMenuBarOption(dirType)} />}
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
      footer={
        <StatusBar
          textLeft={getSelectionStatusText(dirType, files)}
          textRight={getSelectedItemStatusText(dirType)}
        />
      }
    />
  );
};

export default MyComputerApp;
