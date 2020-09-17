import { h, FunctionComponent } from 'preact';

import { AppProps } from '../../../data/appList';
import fileSystem from '../../../data/filesystem';
import fileTypeList from '../../../data/fileTypeList';
import useShellFilesState, {
  ShellItem,
} from '../../../hooks/useShellFilesState';
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
    fileSystem.dir.c.dir.windows.dir.desktop
  );

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
