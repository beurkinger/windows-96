import { createContext } from 'preact';

import { AppId, AppInfos } from '../data/appList';

export type RunningApp = {
  coords: { x: number; y: number };
  data: AppInfos;
  hasFocus: boolean;
  isMaximized: boolean;
  isMinimized: boolean;
  size: { width: number; height: number };
  zIndex: number;
};

export interface ContextType {
  apps: RunningApp[];
  addApp: (appId: AppId) => void;
  closeApp: (zIndex: number) => void;
  focusOnApp: (appIndex: number) => void;
  maximizeApp: (appIndex: number) => void;
  minimizeApp: (appIndex: number) => void;
  moveApp: (appIndex: number, coords: { x: number; y: number }) => void;
  unMaximizeApp: (appIndex: number) => void;
  unMinimizeApp: (appIndex: number) => void;
}

const initialValue: ContextType = {
  apps: [],
  addApp: () => null,
  closeApp: () => null,
  focusOnApp: () => null,
  maximizeApp: () => null,
  minimizeApp: () => null,
  moveApp: () => null,
  unMaximizeApp: () => null,
  unMinimizeApp: () => null,
};

const RunningAppsContext = createContext<ContextType>(initialValue);

export default RunningAppsContext;
