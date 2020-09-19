import { h, FunctionComponent } from 'preact';

import { ShellItem } from '../../../types/ShellItems';
import { AppProps } from '../../../data/appList';
import fileTypeList from '../../../data/fileTypeList';
import { getDirFromPath } from '../../../utils/FileSystemUtils';
import useShellFilesState from '../../../hooks/useShellFilesState';
import FileGrid from '../../shared/FileGrid/FileGrid';

import style from './Desktop.css';

type Props = AppProps & {
  background?: string;
};

const Desktop: FunctionComponent<Props> = ({
  background = 'lightseagreen',
  openApp,
}: Props) => {
  const { files, focusOnFile, removeFocus } = useShellFilesState(
    getDirFromPath('c:/Windows/Desktop')
  );

  const handleOnDblClickFile = (item: ShellItem) => {
    if (item.type === 'app') openApp({ appId: item.appId });
    if (item.type === 'dir') {
      openApp({ appId: 'myComputer', workingDir: item.fileSystemNode });
    }
    if (item.type === 'file') {
      openApp({
        appId: fileTypeList[item.fileTypeId].appId,
        workingFile: item.fileSystemNode,
      });
    }
  };
  return (
    <div className={style.desktop} style={{ background }}>
      <FileGrid
        direction="column"
        files={files}
        onClick={removeFocus}
        onClickFile={(file) => focusOnFile(file.id)}
        onDblClickFile={handleOnDblClickFile}
        textColor="white"
      />
    </div>
  );
};

export default Desktop;
