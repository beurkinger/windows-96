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

export interface ContextType {
  openApp: (options: {
    appId: AppId;
    isDraggable?: boolean;
    isResizeable?: boolean;
    workingDir?: FileSystemDir;
    workingFile?: FileSystemFile;
  }) => void;
  closeWindow: (zIndex: number) => void;
  focusOnWindow: (windowIndex: number) => void;
  maximizeWindow: (windowIndex: number) => void;
  minimizeWindow: (windowIndex: number) => void;
  moveWindow: (windowIndex: number, coords: { x: number; y: number }) => void;
  resizeWindow: (windowIndex: number, coords: { x: number; y: number }) => void;
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
  resizeWindow: () => null,
  unMaximizeWindow: () => null,
  unMinimizeWindow: () => null,
  windows: [],
};

const OpenWindowsContext = createContext<ContextType>(initialValue);

export default OpenWindowsContext;
