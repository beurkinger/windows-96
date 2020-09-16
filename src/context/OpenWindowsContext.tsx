import { createContext } from 'preact';

import { AppId, App } from '../data/appList';
import { FileSystemDir, FileSystemFile } from '../data/filesystem';
import { IconId } from '../data/iconList';

export type OpenWindow = {
  app: App<unknown>;
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
  addWindow: (options: {
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
  addWindow: () => null,
  closeWindow: () => null,
  focusOnWindow: () => null,
  maximizeWindow: () => null,
  minimizeWindow: () => null,
  moveWindow: () => null,
  unMaximizeWindow: () => null,
  unMinimizeWindow: () => null,
  windows: [],
};

const OpenWindowsContext = createContext<ContextType>(initialValue);

export default OpenWindowsContext;
