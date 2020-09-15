/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { VNode } from 'preact';
import { IconId } from './iconList';
import ExplorerApp from '../Components/apps/ExplorerApp/ExplorerApp';
import MyComputerApp from '../Components/apps/MyComputerApp/MyComputerApp'; // } //   Props as MyComputerAppProps, // , {
import { ContextType as OpenWindowsContextType } from '../context/OpenWindowsContext';

export interface AppProps {
  addWindow: OpenWindowsContextType['addWindow'];
}

export type AppInfos = {
  getComponent: ((props: AppProps) => VNode | null) | null;
  id: AppId;
  iconId: IconId;
  name: string;
};
export type AppList = { [key in AppId]: AppInfos };

export type AppId =
  | 'binEmpty'
  | 'binFull'
  | 'briefcase'
  | 'calc'
  | 'cdDrive'
  | 'cdPlayer'
  | 'controlPanel'
  | 'defrag'
  | 'dialUpNetwork'
  | 'exchange'
  | 'explorer'
  | 'find'
  | 'findComputer'
  | 'findMsn'
  | 'floppyDrive'
  | 'hardDrive'
  | 'help'
  | 'hyperterminal'
  | 'mediaPlayer'
  | 'msn'
  | 'msDos'
  | 'msPaint'
  | 'myComputer'
  | 'networkNeighborhood'
  | 'notepad'
  | 'phoneDialer'
  | 'printers'
  | 'register'
  | 'run'
  | 'scandisk'
  | 'shutdown'
  | 'soundRecorder'
  | 'taskbar'
  | 'volumeControl'
  | 'wordpad';

export const appList: AppList = {
  binEmpty: {
    getComponent: null,
    id: 'binEmpty',
    iconId: 'binEmpty',
    name: 'Recycle Bin',
  },
  binFull: {
    getComponent: null,
    id: 'binFull',
    iconId: 'binFull',
    name: 'Recycle Bin',
  },
  briefcase: {
    getComponent: null,
    id: 'briefcase',
    iconId: 'briefcase',
    name: 'My Briefcase',
  },
  calc: { getComponent: null, id: 'calc', iconId: 'calc', name: 'Calculator' },
  cdDrive: {
    getComponent: null,
    id: 'cdDrive',
    iconId: 'cdDrive',
    name: '(D:)',
  },
  cdPlayer: {
    getComponent: null,
    id: 'cdPlayer',
    iconId: 'cdPlayer',
    name: 'CD Player',
  },
  controlPanel: {
    getComponent: null,
    id: 'controlPanel',
    iconId: 'controlPanel',
    name: 'Control Panel',
  },
  defrag: {
    getComponent: null,
    id: 'defrag',
    iconId: 'defrag',
    name: 'Disk Defragmenter',
  },
  dialUpNetwork: {
    getComponent: null,
    id: 'dialUpNetwork',
    iconId: 'dialUpNetwork',
    name: 'Dial-Up Networking',
  },
  exchange: {
    getComponent: null,
    id: 'exchange',
    iconId: 'exchange',
    name: 'Microsoft Exchange',
  },
  explorer: {
    getComponent: (props) => ExplorerApp(props),
    id: 'explorer',
    iconId: 'explorer',
    name: 'Windows Explorer',
  },
  find: {
    getComponent: null,
    id: 'find',
    iconId: 'find',
    name: 'Find Files or Folders... ',
  },
  findComputer: {
    getComponent: null,
    id: 'findComputer',
    iconId: 'findComputer',
    name: 'Find Computer...',
  },
  findMsn: {
    getComponent: null,
    id: 'findMsn',
    iconId: 'findMsn',
    name: 'Find on The Microsoft Network',
  },
  floppyDrive: {
    getComponent: null,
    id: 'floppyDrive',
    iconId: 'floppyDrive',
    name: '3½ Floppy (A:)',
  },
  hardDrive: {
    getComponent: null,
    id: 'hardDrive',
    iconId: 'hardDrive',
    name: '(C:)',
  },
  help: { getComponent: null, id: 'help', iconId: 'help', name: 'Help' },
  hyperterminal: {
    getComponent: null,
    id: 'hyperterminal',
    iconId: 'hyperterminal',
    name: 'Hyper Terminal',
  },
  mediaPlayer: {
    getComponent: null,
    id: 'mediaPlayer',
    iconId: 'mediaPlayer',
    name: 'Media Player',
  },
  msn: {
    getComponent: null,
    id: 'msn',
    iconId: 'msn',
    name: 'The Microsoft Network',
  },
  msDos: {
    getComponent: null,
    id: 'msDos',
    iconId: 'msDos',
    name: 'MS-DOS Prompt',
  },
  msPaint: {
    getComponent: null,
    id: 'msPaint',
    iconId: 'msPaint',
    name: 'Paint',
  },
  myComputer: {
    getComponent: (props) => MyComputerApp(props),
    id: 'myComputer',
    iconId: 'myComputer',
    name: 'My Computer',
  },
  networkNeighborhood: {
    getComponent: null,
    id: 'networkNeighborhood',
    iconId: 'network',
    name: 'Network Neighborhood',
  },
  notepad: {
    getComponent: null,
    id: 'notepad',
    iconId: 'notepad',
    name: 'Notepad',
  },
  phoneDialer: {
    getComponent: null,
    id: 'phoneDialer',
    iconId: 'phoneDialer',
    name: 'Phone Dialer',
  },
  printers: {
    getComponent: null,
    id: 'printers',
    iconId: 'printers',
    name: 'Printers',
  },
  register: {
    getComponent: null,
    id: 'register',
    iconId: 'register',
    name: 'Online Registration',
  },
  run: { getComponent: null, id: 'run', iconId: 'run', name: 'Run' },
  scandisk: {
    getComponent: null,
    id: 'scandisk',
    iconId: 'scandisk',
    name: 'ScanDisk',
  },
  soundRecorder: {
    getComponent: null,
    id: 'soundRecorder',
    iconId: 'sound',
    name: 'Sound Recorder',
  },
  shutdown: {
    getComponent: null,
    id: 'shutdown',
    iconId: 'shutdown',
    name: 'Shutdown...',
  },
  taskbar: {
    getComponent: null,
    id: 'taskbar',
    iconId: 'taskbar',
    name: 'Taskbar...',
  },
  volumeControl: {
    getComponent: null,
    id: 'volumeControl',
    iconId: 'volume',
    name: 'Volume Control',
  },
  wordpad: {
    getComponent: null,
    id: 'wordpad',
    iconId: 'wordpad',
    name: 'WordPad',
  },
};
