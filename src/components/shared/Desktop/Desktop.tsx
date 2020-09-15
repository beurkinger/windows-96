import { h, FunctionComponent } from 'preact';

import { AppId } from '../../../data/appList';
import { ContextType as OpenWindowsContextType } from '../../../context/OpenWindowsContext';
import FileGrid from '../../shared/FileGrid/FileGrid';

import style from './Desktop.css';
import fileSystem, { FileSystemDir } from '../../../data/filesystem';

interface Props {
  addWindow: OpenWindowsContextType['addWindow'];
  background?: string;
}

const Desktop: FunctionComponent<Props> = ({
  addWindow,
  background = 'lightseagreen',
}: Props) => {
  const handleOnDblClickFile = (fileId: string, fileType: string) => {
    if (fileType === 'app') addWindow(fileId as AppId);
  };
  return (
    <div className={style.desktop} style={{ background }}>
      <FileGrid
        direction="column"
        fileSystemNode={
          fileSystem.dir.c.dir.windows.dir.desktop as FileSystemDir
        }
        onDblClickFile={handleOnDblClickFile}
      />
    </div>
  );
};

export default Desktop;
