import { h, FunctionComponent } from 'preact';

import { AppId, AppProps } from '../../../data/appList';
import fileSystem, { FileSystemDir } from '../../../data/filesystem';
import { FileGridItem } from '../../../hooks/useFileGridState';
import FileGrid from '../../shared/FileGrid/FileGrid';

import style from './Desktop.css';

type Props = AppProps & {
  background?: string;
};

const Desktop: FunctionComponent<Props> = ({
  addWindow,
  background = 'lightseagreen',
}: Props) => {
  const handleOnDblClickFile = (file: FileGridItem) => {
    if (file.type === 'app') addWindow(file.value as AppId);
    if (file.type === 'dir') {
      addWindow('myComputer', file.value as FileSystemDir);
    }
  };
  return (
    <div className={style.desktop} style={{ background }}>
      <FileGrid
        direction="column"
        fileSystemNode={fileSystem.dir.c.dir.windows.dir.desktop}
        onDblClickFile={handleOnDblClickFile}
      />
    </div>
  );
};

export default Desktop;
