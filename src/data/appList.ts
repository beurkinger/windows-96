import { IconId } from '../components/Icon/iconList';

export type AppInfos = { iconId: IconId };
export type AppList = { [key in AppId]: Partial<AppInfos> };

export type AppId =
  | 'briefcase'
  | 'calc'
  | 'cdPlayer'
  | 'controlPanel'
  | 'defrag'
  | 'exchange'
  | 'explorer'
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
  | 'taskbar'
  | 'wordpad';

export const appList: AppList = {
  briefcase: { iconId: 'briefcase' },
  calc: { iconId: 'calc' },
  cdPlayer: { iconId: 'cdPlayer' },
  controlPanel: { iconId: 'controlPanel' },
  defrag: { iconId: 'defrag' },
  exchange: { iconId: 'exchange' },
  explorer: { iconId: 'explorer' },
  findComputer: { iconId: 'findComputer' },
  findMsn: { iconId: 'findMsn' },
  help: { iconId: 'help' },
  hyperterminal: { iconId: 'hyperterminal' },
  mediaPlayer: { iconId: 'mediaPlayer' },
  msn: { iconId: 'msn' },
  msDos: { iconId: 'msDos' },
  msPaint: { iconId: 'msPaint' },
  myComputer: { iconId: 'myComputer' },
  network: { iconId: 'network' },
  notepad: { iconId: 'notepad' },
  phoneDialer: { iconId: 'phoneDialer' },
  printers: { iconId: 'printers' },
  register: { iconId: 'register' },
  run: { iconId: 'run' },
  scandisk: { iconId: 'scandisk' },
  shutdown: { iconId: 'shutdown' },
  taskbar: { iconId: 'taskbar' },
  wordpad: { iconId: 'wordpad' },
};
