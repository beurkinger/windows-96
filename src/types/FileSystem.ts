import { AppId } from './App';
import { FileTypeId } from './FileType';
import { IconId } from './Icon';

export const dirTypes = [
  'default',
  'briefcase',
  'controlPanel',
  'dialUpNetwork',
  'fonts',
  'networkNeighborhood',
  'printers',
  'recycleBin',
] as const;

export type DirType = typeof dirTypes[number];

export type FileSystemItem =
  | FileSystemApp
  | FileSystemDir
  | FileSystemFile
  | FileSystemShortcut;

export type FileSystemApp = {
  appId: AppId;
  name?: string;
  type: 'app';
};

export type FileSystemDir = {
  dir: { [key: string]: FileSystemItem };
  dirType?: DirType;
  iconId?: IconId;
  name: string;
  type: 'dir';
};

export type FileSystemFile = {
  content: string;
  fileTypeId: FileTypeId;
  name: string;
  type: 'file';
};

export type FileSystemShortcut = {
  dirPath?: string;
  filePath?: string;
  iconId: IconId;
  name: string;
  toAppId: AppId;
  type: 'shortcut';
};
