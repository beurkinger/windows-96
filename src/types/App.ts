import { FileSystemDir, FileSystemFile } from './FileSystem';
import { IconId } from './Icon';
import { OpenWindowsContextType } from '../context/OpenWindowsContext';

export const appIds = [
  'briefcase',
  'calc',
  'cdPlayer',
  'defrag',
  'dialUpNetwork',
  'exchange',
  'explorer',
  'find',
  'findComputer',
  'findMsn',
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
  'register',
  'quickView',
  'recycleBin',
  'run',
  'scandisk',
  'shutdown',
  'soundRecorder',
  'taskbar',
  'timer',
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
  size?: { width: number; height: number };
};

export type AppList = { [key in AppId]: App };

export interface AppProps {
  closeWindow: () => void;
  openApp: OpenWindowsContextType['openApp'];
  workingDir?: FileSystemDir;
  workingFile?: FileSystemFile;
}
