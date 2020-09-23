import { h, FunctionComponent } from 'preact';

import { AppProps } from '../../../types/App';
import { ShellItem } from '../../../types/Shell';
import { dialUpNetworkFs } from '../../../data/fileSystem';
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

const DialUpNetworkApp: FunctionComponent<AppProps> = () => {
  const { files, focusOnFile, removeFocus } = useShellFilesState(
    dialUpNetworkFs
  );

  const handleOnDblClickFile = () => null;

  const textLeft = getSelectionStatusText(files);
  return (
    <WindowContent
      menu={
        <MenuBar options={['File', 'Edit', 'View', 'Connexions', 'Help']} />
      }
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

export default DialUpNetworkApp;
