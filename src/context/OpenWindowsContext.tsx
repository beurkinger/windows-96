import { createContext } from 'preact';

import { FileSystemDir, FileSystemFile } from '../types/FileSystemItems';
import { AppId, App } from '../data/appList';
import { IconId } from '../data/iconList';

export type OpenWindow = {
  app: App;
  coords: { x: number; y: number };
  hasFocus: boolean;
  iconId: IconId;
  id: string;
  isMaximized: boolean;
  isMinimized: boolean;
  size: { width: number; height: number };
  title: string;
  workingDir?: FileSystemDir;
  workingFile?: FileSystemFile;
  zIndex: number;
};

export interface ContextType {
  openApp: (options: {
    appId: AppId;
    workingDir?: FileSystemDir;
    workingFile?: FileSystemFile;
  }) => void;
  closeWindow: (zIndex: number) => void;
  focusOnWindow: (windowIndex: number) => void;
  maximizeWindow: (windowIndex: number) => void;
  minimizeWindow: (windowIndex: number) => void;
  moveWindow: (windowIndex: number, coords: { x: number; y: number }) => void;
  unMaximizeWindow: (windowIndex: number) => void;
  unMinimizeWindow: (windowIndex: number) => void;
  windows: OpenWindow[];
}

const initialValue: ContextType = {
  closeWindow: () => null,
  focusOnWindow: () => null,
  maximizeWindow: () => null,
  minimizeWindow: () => null,
  moveWindow: () => null,
  openApp: () => null,
  unMaximizeWindow: () => null,
  unMinimizeWindow: () => null,
  windows: [],
};

const OpenWindowsContext = createContext<ContextType>(initialValue);

export default OpenWindowsContext;
