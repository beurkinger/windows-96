import { h, FunctionComponent } from 'preact';

import { AppId, appList } from '../../../data/appList';
import { ContextType as OpenWindowsContextType } from '../../../context/OpenWindowsContext';
import FileGrid, { GridFile } from '../../shared/FileGrid/FileGrid';

import style from './Desktop.css';

interface Props {
  addWindow: OpenWindowsContextType['addWindow'];
  background?: string;
}

const Desktop: FunctionComponent<Props> = ({
  addWindow,
  background = 'lightseagreen',
}: Props) => {
  const initialFiles: GridFile[] = [
    {
      id: appList.myComputer.id,
      iconId: appList.myComputer.iconId,
      hasFocus: false,
      hasSoftFocus: true,
      name: appList.myComputer.name,
      type: 'app',
    },
    {
      id: appList.networkNeighborhood.id,
      iconId: appList.networkNeighborhood.iconId,
      hasFocus: false,
      hasSoftFocus: false,
      name: appList.networkNeighborhood.name,
      type: 'app',
    },
    {
      id: appList.briefcase.id,
      iconId: appList.briefcase.iconId,
      hasFocus: false,
      hasSoftFocus: false,
      name: appList.briefcase.name,
      type: 'app',
    },
    {
      id: appList.binEmpty.id,
      iconId: appList.binEmpty.iconId,
      hasFocus: false,
      hasSoftFocus: false,
      name: appList.binEmpty.name,
      type: 'app',
    },
  ];

  const handleOnDblClickFile = (fileId: string, fileType: string) => {
    if (fileType === 'app') addWindow(fileId as AppId);
  };

  return (
    <div className={style.desktop} style={{ background }}>
      <FileGrid
        direction="column"
        initialFiles={initialFiles}
        onDblClickFile={handleOnDblClickFile}
      />
    </div>
  );
};

export default Desktop;
