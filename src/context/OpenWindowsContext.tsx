import { createContext } from 'preact';

import { App, AppId } from '../types/App';
import { FileSystemDir, FileSystemFile } from '../types/FileSystem';
import { IconId } from '../types/Icon';

export type OpenWindow = {
  app: App;
  coords: { x: number; y: number };
  hasFocus: boolean;
  iconId: IconId;
  id: string;
  isDraggable: boolean;
  isMaximized: boolean;
  isMinimized: boolean;
  isResizeable: boolean;
  size: { x: number; y: number };
  title: string;
  workingDir?: FileSystemDir;
  workingFile?: FileSystemFile;
  zIndex: number;
};

export interface OpenWindowsContextType {
  openApp: (options: {
    appId: AppId;
    workingDir?: FileSystemDir;
    workingFile?: FileSystemFile;
  }) => void;
  closeWindow: (id: string) => void;
  focusOnWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  moveWindow: (id: string, coords: { x: number; y: number }) => void;
  resizeWindow: (id: string, coords: { x: number; y: number }) => void;
  unMaximizeWindow: (id: string) => void;
  unMinimizeWindow: (id: string) => void;
  windows: OpenWindow[];
}

const initialValue: OpenWindowsContextType = {
  closeWindow: () => null,
  focusOnWindow: () => null,
  maximizeWindow: () => null,
  minimizeWindow: () => null,
  moveWindow: () => null,
  openApp: () => null,
  resizeWindow: () => null,
  unMaximizeWindow: () => null,
  unMinimizeWindow: () => null,
  windows: [],
};

const OpenWindowsContext = createContext<OpenWindowsContextType>(initialValue);

export default OpenWindowsContext;
