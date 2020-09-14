import { IconId } from './iconList';

export type AppInfos = { iconId: IconId; name: string };
export type AppList = { [key in AppId]: AppInfos };

export type AppId =
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
  | 'network'
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
  briefcase: { iconId: 'briefcase', name: 'My Briefcase' },
  calc: { iconId: 'calc', name: 'Calculator' },
  cdPlayer: { iconId: 'cdPlayer', name: 'CD Player' },
  controlPanel: { iconId: 'controlPanel', name: 'Control Panel' },
  defrag: { iconId: 'defrag', name: 'Disk Defragmenter' },
  exchange: { iconId: 'exchange', name: 'Microsoft Exchange' },
  explorer: { iconId: 'explorer', name: 'Windows Explorer' },
  find: { iconId: 'find', name: 'Find Files or Folders... ' },
  findComputer: { iconId: 'findComputer', name: 'Find Computer...' },
  findMsn: { iconId: 'findMsn', name: 'Find on The Microsoft Network' },
  help: { iconId: 'help', name: 'Help' },
  hyperterminal: { iconId: 'hyperterminal', name: 'Hyper Terminal' },
  mediaPlayer: { iconId: 'mediaPlayer', name: 'Media Player' },
  msn: { iconId: 'msn', name: 'The Microsoft Network' },
  msDos: { iconId: 'msDos', name: 'MS-DOS Prompt' },
  msPaint: { iconId: 'msPaint', name: 'Paint' },
  myComputer: { iconId: 'myComputer', name: 'My Computer' },
  network: { iconId: 'network', name: 'Network' },
  notepad: { iconId: 'notepad', name: 'Notepad' },
  phoneDialer: { iconId: 'phoneDialer', name: 'Phone Dialer' },
  printers: { iconId: 'printers', name: 'Printers' },
  register: { iconId: 'register', name: 'Online registration' },
  run: { iconId: 'run', name: 'Run' },
  scandisk: { iconId: 'scandisk', name: 'ScanDisk' },
  soundRecorder: { iconId: 'sound', name: 'Sound Recorder' },
  shutdown: { iconId: 'shutdown', name: 'Shutdown...' },
  taskbar: { iconId: 'taskbar', name: 'Taskbar...' },
  volumeControl: { iconId: 'volume', name: 'Volume Control' },
  wordpad: { iconId: 'wordpad', name: 'WordPad' },
};
