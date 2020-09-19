import { h, FunctionComponent } from 'preact';

import { AppId } from '../../../data/appList';
import { startMenuFs } from '../../../data/fileSystem';
import { FileSystemDir, FileSystemFile } from '../../../types/FileSystem';
import { getProgramsMenuOptions } from '../../../utils/win96/StartMenuUtils';
import Menu from '../Menu/Menu';

import style from './StartMenu.css';

const programsOption = getProgramsMenuOptions(startMenuFs.dir.programs);
const documentsOption = getProgramsMenuOptions(startMenuFs.dir.documents);
const settingsOption = getProgramsMenuOptions(startMenuFs.dir.settings);
const findOption = getProgramsMenuOptions(startMenuFs.dir.find);
const helpOption = getProgramsMenuOptions(startMenuFs.dir.help);
const runOption = getProgramsMenuOptions(startMenuFs.dir.run);
const shutdownOption = getProgramsMenuOptions(startMenuFs.dir.shutdown);

interface Props {
  onSelect: (
    appId: AppId,
    workingDirPath?: FileSystemDir,
    workinFile?: FileSystemFile
  ) => void;
}

const StartMenu: FunctionComponent<Props> = ({ onSelect }: Props) => {
  const handleOnSelect = (
    value:
      | string
      | {
          appId: AppId;
          workingDir?: FileSystemDir;
          workingFile?: FileSystemFile;
        }
  ) => {
    if (typeof value === 'string') return;
    onSelect(value.appId, value.workingDir, value.workingFile);
  };

  return (
    <div className={style.startMenu}>
      <Menu
        onSelect={handleOnSelect}
        isLarge={true}
        options={[
          [
            programsOption,
            documentsOption,
            settingsOption,
            findOption,
            helpOption,
            runOption,
          ],
          [shutdownOption],
        ]}
      />
    </div>
  );
};

export default StartMenu;
