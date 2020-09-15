import { createContext } from 'preact';

import { AppId, AppInfos } from '../data/appList';

export type OpenWindow = {
  app: AppInfos;
  coords: { x: number; y: number };
  hasFocus: boolean;
  id: string;
  isMaximized: boolean;
  isMinimized: boolean;
  size: { width: number; height: number };
  zIndex: number;
};

export interface ContextType {
  addWindow: (appId: AppId) => void;
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
