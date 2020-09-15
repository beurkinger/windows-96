import { h, FunctionComponent } from 'preact';

import { AppId, AppProps, appList } from '../../../data/appList';
import Countour from '../../shared/Countour/Countour';
import FileGrid, { GridFile } from '../../shared/FileGrid/FileGrid';
import MenuBar from '../../shared/MenuBar/MenuBar';

import style from './MyComputerApp.css';

const MyComputerApp: FunctionComponent<AppProps> = ({
  addWindow,
}: AppProps) => {
  const initialFiles: GridFile[] = [
    {
      id: appList.floppyDrive.id,
      iconId: appList.floppyDrive.iconId,
      hasFocus: false,
      hasSoftFocus: true,
      name: appList.floppyDrive.name,
      type: 'app',
    },
    {
      id: appList.hardDrive.id,
      iconId: appList.hardDrive.iconId,
      hasFocus: false,
      hasSoftFocus: false,
      name: appList.hardDrive.name,
      type: 'app',
    },
    {
      id: appList.cdDrive.id,
      iconId: appList.cdDrive.iconId,
      hasFocus: false,
      hasSoftFocus: false,
      name: appList.cdDrive.name,
      type: 'app',
    },
    {
      id: appList.controlPanel.id,
      iconId: appList.controlPanel.iconId,
      hasFocus: false,
      hasSoftFocus: false,
      name: appList.controlPanel.name,
      type: 'app',
    },
    {
      id: appList.printers.id,
      iconId: appList.printers.iconId,
      hasFocus: false,
      hasSoftFocus: false,
      name: appList.printers.name,
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
  ];

  const handleOnDblClickFile = (fileId: string, fileType: string) => {
    if (fileType === 'app') addWindow(fileId as AppId);
  };

  return (
    <div className={style.myComputerApp}>
      <MenuBar options={['File', 'Edit', 'View', 'Help']} />
      <Countour>
        <FileGrid
          initialFiles={initialFiles}
          onDblClickFile={handleOnDblClickFile}
        />
      </Countour>
    </div>
  );
};

export default MyComputerApp;
