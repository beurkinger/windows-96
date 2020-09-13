import { createContext, ComponentChild } from 'preact';

export type RunningApp = {
  content: string;
  coords: { x: number; y: number };
  icon: ComponentChild;
  hasFocus: boolean;
  isMaximized: boolean;
  isMinimized: boolean;
  size: { width: number; height: number };
  title: string;
  zIndex: number;
};

export interface ContextType {
  apps: RunningApp[];
  addApp: (
    app: Omit<RunningApp, 'isMaximized' | 'isMinimized' | 'zIndex'>
  ) => void;
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
