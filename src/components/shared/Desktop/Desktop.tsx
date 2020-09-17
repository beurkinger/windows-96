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
  addWindow,
  background = 'lightseagreen',
}: Props) => {
  const { files, focusOnFile, removeFocus } = useShellFilesState(
    getDirFromPath('c:/windows/desktop')
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
