import { FunctionComponent } from 'preact';
import ExplorerApp from '../components/ExplorerApp/ExplorerApp';
import { IconId } from './iconList';

export type AppInfos = {
  component: FunctionComponent | null;
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
  | 'cdPlayer'
  | 'controlPanel'
  | 'defrag'
  | 'exchange'
  | 'explorer'
  | 'find'
  | 'findComputer'
  | 'findMsn'
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
    component: null,
    id: 'binEmpty',
    iconId: 'binEmpty',
    name: 'Recycle Bin',
  },
  binFull: {
    component: null,
    id: 'binFull',
    iconId: 'binFull',
    name: 'Recycle Bin',
  },
  briefcase: {
    component: null,
    id: 'briefcase',
    iconId: 'briefcase',
    name: 'My Briefcase',
  },
  calc: { component: null, id: 'calc', iconId: 'calc', name: 'Calculator' },
  cdPlayer: {
    component: null,
    id: 'cdPlayer',
    iconId: 'cdPlayer',
    name: 'CD Player',
  },
  controlPanel: {
    component: null,
    id: 'controlPanel',
    iconId: 'controlPanel',
    name: 'Control Panel',
  },
  defrag: {
    component: null,
    id: 'defrag',
    iconId: 'defrag',
    name: 'Disk Defragmenter',
  },
  exchange: {
    component: null,
    id: 'exchange',
    iconId: 'exchange',
    name: 'Microsoft Exchange',
  },
  explorer: {
    component: ExplorerApp,
    id: 'explorer',
    iconId: 'explorer',
    name: 'Windows Explorer',
  },
  find: {
    component: null,
    id: 'find',
    iconId: 'find',
    name: 'Find Files or Folders... ',
  },
  findComputer: {
    component: null,
    id: 'findComputer',
    iconId: 'findComputer',
    name: 'Find Computer...',
  },
  findMsn: {
    component: null,
    id: 'findMsn',
    iconId: 'findMsn',
    name: 'Find on The Microsoft Network',
  },
  help: { component: null, id: 'help', iconId: 'help', name: 'Help' },
  hyperterminal: {
    component: null,
    id: 'hyperterminal',
    iconId: 'hyperterminal',
    name: 'Hyper Terminal',
  },
  mediaPlayer: {
    component: null,
    id: 'mediaPlayer',
    iconId: 'mediaPlayer',
    name: 'Media Player',
  },
  msn: {
    component: null,
    id: 'msn',
    iconId: 'msn',
    name: 'The Microsoft Network',
  },
  msDos: {
    component: null,
    id: 'msDos',
    iconId: 'msDos',
    name: 'MS-DOS Prompt',
  },
  msPaint: { component: null, id: 'msPaint', iconId: 'msPaint', name: 'Paint' },
  myComputer: {
    component: null,
    id: 'myComputer',
    iconId: 'myComputer',
    name: 'My Computer',
  },
  networkNeighborhood: {
    component: null,
    id: 'networkNeighborhood',
    iconId: 'network',
    name: 'Network Neighborhood',
  },
  notepad: {
    component: null,
    id: 'notepad',
    iconId: 'notepad',
    name: 'Notepad',
  },
  phoneDialer: {
    component: null,
    id: 'phoneDialer',
    iconId: 'phoneDialer',
    name: 'Phone Dialer',
  },
  printers: {
    component: null,
    id: 'printers',
    iconId: 'printers',
    name: 'Printers',
  },
  register: {
    component: null,
    id: 'register',
    iconId: 'register',
    name: 'Online Registration',
  },
  run: { component: null, id: 'run', iconId: 'run', name: 'Run' },
  scandisk: {
    component: null,
    id: 'scandisk',
    iconId: 'scandisk',
    name: 'ScanDisk',
  },
  soundRecorder: {
    component: null,
    id: 'soundRecorder',
    iconId: 'sound',
    name: 'Sound Recorder',
  },
  shutdown: {
    component: null,
    id: 'shutdown',
    iconId: 'shutdown',
    name: 'Shutdown...',
  },
  taskbar: {
    component: null,
    id: 'taskbar',
    iconId: 'taskbar',
    name: 'Taskbar...',
  },
  volumeControl: {
    component: null,
    id: 'volumeControl',
    iconId: 'volume',
    name: 'Volume Control',
  },
  wordpad: {
    component: null,
    id: 'wordpad',
    iconId: 'wordpad',
    name: 'WordPad',
  },
};
