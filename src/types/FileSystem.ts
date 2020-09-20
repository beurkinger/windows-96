import { AppId } from './App';
import { FileTypeId } from '../data/fileTypeList';
import { IconId } from '../data/iconList';

export type FileSystemItem =
  | FileSystemApp
  | FileSystemDir
  | FileSystemFile
  | FileSystemShortcut;

export type FileSystemApp = {
  appId: AppId;
};

export type FileSystemDir = {
  dir: { [key: string]: FileSystemItem };
  iconId?: IconId;
  name: string;
};

export type FileSystemFile = {
  content: string;
  fileTypeId: FileTypeId;
  name: string;
};

export type FileSystemShortcut = {
  dirPath?: string;
  filePath?: string;
  iconId: IconId;
  name: string;
  toAppId: AppId;
};
