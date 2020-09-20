import { AppId } from './App';
import { IconId } from './Icon';
import { FileSystemDir, FileSystemFile } from './FileSystem';
import { FileTypeId } from './FileType';

export type ShellItemType = 'app' | 'dir' | 'file';
export type ShellItem = ShellApp | ShellDir | ShellFile;

export interface ShellApp {
  appId: AppId;
  hasFocus: boolean;
  hasSoftFocus: boolean;
  iconId: IconId;
  id: string;
  name: string;
  type: 'app';
}

export interface ShellDir {
  fileSystemDir: FileSystemDir;
  hasFocus: boolean;
  hasSoftFocus: boolean;
  iconId: IconId;
  id: string;
  name: string;
  type: 'dir';
}

export interface ShellFile {
  fileSystemFile: FileSystemFile;
  fileTypeId: FileTypeId;
  iconId: IconId;
  id: string;
  hasFocus: boolean;
  hasSoftFocus: boolean;
  name: string;
  type: 'file';
}
