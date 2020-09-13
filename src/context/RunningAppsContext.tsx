import { createContext, ComponentChild } from 'preact';

export type RunningApp = {
  content: string;
  coords: { x: number; y: number };
  icon: ComponentChild;
  size: { width: number; height: number };
  title: string;
  zIndex: number;
};

export interface ContextType {
  apps: RunningApp[];
  addApp: (app: Omit<RunningApp, 'zIndex'>) => void;
  makeAppOnTop: (appZindex: number) => void;
}

const initialValue: ContextType = {
  apps: [],
  addApp: () => null,
  makeAppOnTop: () => null,
};

const RunningAppContext = createContext<ContextType>(initialValue);

export default RunningAppContext;
