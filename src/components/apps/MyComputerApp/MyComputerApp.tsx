import { h, FunctionComponent } from 'preact';

import { AppProps } from '../../../data/appList';
import filesystem from '../../../data/filesystem';
import fileTypeList from '../../../data/fileTypeList';
import { ShellItem } from '../../../hooks/useFileGridState';
import Countour from '../../shared/Countour/Countour';
import FileGrid from '../../shared/FileGrid/FileGrid';
import MenuBar from '../../shared/MenuBar/MenuBar';
import WindowContent from '../../shared/WindowContent/WindowContent';

const MyComputerApp: FunctionComponent<AppProps> = ({
  addWindow,
  workingDir,
}: AppProps) => {
  const handleOnDblClickFile = (file: ShellItem) => {
    if (file.type === 'app') addWindow({ appId: file.appId });
    if (file.type === 'dir') {
      addWindow({ appId: 'myComputer', workingDir: file.fileSystemDir });
    }
    if (file.type === 'file') {
      console.log(fileTypeList[file.fileTypeId].appId);
      addWindow({
        appId: fileTypeList[file.fileTypeId].appId,
        workingFile: file.fileSystemFile,
      });
    }
  };

  // return (
  //   <div className={style.myComputerApp}>
  //     <MenuBar options={['File', 'Edit', 'View', 'Help']} />
  //     <Countour>
  //       <FileGrid
  //         fileSystemNode={workingDir ?? filesystem}
  //         onDblClickFile={handleOnDblClickFile}
  //       />
  //     </Countour>
  //   </div>
  // );

  return (
    <WindowContent
      menu={<MenuBar options={['File', 'Edit', 'View', 'Help']} />}
      body={
        <Countour>
          <FileGrid
            fileSystemNode={workingDir ?? filesystem}
            onDblClickFile={handleOnDblClickFile}
          />
        </Countour>
      }
    />
  );
};

export default MyComputerApp;
