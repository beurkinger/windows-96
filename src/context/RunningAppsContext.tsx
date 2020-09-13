import { h, createContext, ComponentChild } from 'preact';

import Icon from '../components/Icon/Icon';

export type RunningApp = {
  content: string;
  coords: { x: number; y: number };
  icon: ComponentChild;
  size: { width: number; height: number };
  title: string;
  zIndex: number;
};

export type Context = RunningApp[];

const initialValue: Context = [
  {
    content: 'How do you do ?',
    coords: { x: 50, y: 50 },
    icon: <Icon />,
    size: { width: 100, height: 100 },
    title: 'Notepad',
    zIndex: 0,
  },
  {
    content: 'How do you do ?',
    coords: { x: 100, y: 100 },
    icon: <Icon />,
    size: { width: 100, height: 100 },
    title: 'Paint',
    zIndex: 0,
  },
  {
    content: 'How do you do ?',
    coords: { x: 150, y: 150 },
    icon: <Icon />,
    size: { width: 100, height: 100 },
    title: 'Minesweeeper',
    zIndex: 0,
  },
];

export default createContext<Context>(initialValue);
