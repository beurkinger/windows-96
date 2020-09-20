import { FileSystemDir, FileSystemFile } from './FileSystem';
import { IconId } from './Icon';
import { OpenWindowsContextType } from '../context/OpenWindowsContext';

export const appIds = [
  'binEmpty',
  'binFull',
  'briefcase',
  'calc',
  'cdDrive',
  'cdPlayer',
  'controlPanel',
  'defrag',
  'dialUpNetwork',
  'exchange',
  'explorer',
  'find',
  'findComputer',
  'findMsn',
  'floppyDrive',
  'hardDrive',
  'help',
  'hyperterminal',
  'mediaPlayer',
  'msn',
  'msDos',
  'msPaint',
  'myComputer',
  'networkNeighborhood',
  'notepad',
  'phoneDialer',
  'printers',
  'register',
  'quickView',
  'run',
  'scandisk',
  'shutdown',
  'soundRecorder',
  'taskbar',
  'volumeControl',
  'wordpad',
] as const;

export type AppId = typeof appIds[number];

export type App = {
  id: AppId;
  iconId: IconId;
  isDraggable?: boolean;
  isResizeable?: boolean;
  name: string;
};

export type AppList = { [key in AppId]: App };

export interface AppProps {
  closeWindow: () => void;
  openApp: OpenWindowsContextType['openApp'];
  workingDir?: FileSystemDir;
  workingFile?: FileSystemFile;
}
