import { IconId } from './iconList';

export type AppInfos = { id: AppId; iconId: IconId; name: string };
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
  binEmpty: { id: 'binEmpty', iconId: 'binEmpty', name: 'Recycle Bin' },
  binFull: { id: 'binFull', iconId: 'binFull', name: 'Recycle Bin' },
  briefcase: { id: 'briefcase', iconId: 'briefcase', name: 'My Briefcase' },
  calc: { id: 'calc', iconId: 'calc', name: 'Calculator' },
  cdPlayer: { id: 'cdPlayer', iconId: 'cdPlayer', name: 'CD Player' },
  controlPanel: {
    id: 'controlPanel',
    iconId: 'controlPanel',
    name: 'Control Panel',
  },
  defrag: { id: 'defrag', iconId: 'defrag', name: 'Disk Defragmenter' },
  exchange: { id: 'exchange', iconId: 'exchange', name: 'Microsoft Exchange' },
  explorer: { id: 'explorer', iconId: 'explorer', name: 'Windows Explorer' },
  find: { id: 'find', iconId: 'find', name: 'Find Files or Folders... ' },
  findComputer: {
    id: 'findComputer',
    iconId: 'findComputer',
    name: 'Find Computer...',
  },
  findMsn: {
    id: 'findMsn',
    iconId: 'findMsn',
    name: 'Find on The Microsoft Network',
  },
  help: { id: 'help', iconId: 'help', name: 'Help' },
  hyperterminal: {
    id: 'hyperterminal',
    iconId: 'hyperterminal',
    name: 'Hyper Terminal',
  },
  mediaPlayer: {
    id: 'mediaPlayer',
    iconId: 'mediaPlayer',
    name: 'Media Player',
  },
  msn: { id: 'msn', iconId: 'msn', name: 'The Microsoft Network' },
  msDos: { id: 'msDos', iconId: 'msDos', name: 'MS-DOS Prompt' },
  msPaint: { id: 'msPaint', iconId: 'msPaint', name: 'Paint' },
  myComputer: { id: 'myComputer', iconId: 'myComputer', name: 'My Computer' },
  networkNeighborhood: {
    id: 'networkNeighborhood',
    iconId: 'network',
    name: 'Network Neighborhood',
  },
  notepad: { id: 'notepad', iconId: 'notepad', name: 'Notepad' },
  phoneDialer: {
    id: 'phoneDialer',
    iconId: 'phoneDialer',
    name: 'Phone Dialer',
  },
  printers: { id: 'printers', iconId: 'printers', name: 'Printers' },
  register: { id: 'register', iconId: 'register', name: 'Online Registration' },
  run: { id: 'run', iconId: 'run', name: 'Run' },
  scandisk: { id: 'scandisk', iconId: 'scandisk', name: 'ScanDisk' },
  soundRecorder: {
    id: 'soundRecorder',
    iconId: 'sound',
    name: 'Sound Recorder',
  },
  shutdown: { id: 'shutdown', iconId: 'shutdown', name: 'Shutdown...' },
  taskbar: { id: 'taskbar', iconId: 'taskbar', name: 'Taskbar...' },
  volumeControl: {
    id: 'volumeControl',
    iconId: 'volume',
    name: 'Volume Control',
  },
  wordpad: { id: 'wordpad', iconId: 'wordpad', name: 'WordPad' },
};
