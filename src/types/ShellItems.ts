import { AppId } from '../data/appList';
import { FileTypeId } from '../data/fileTypeList';
import { IconId } from '../data/iconList';

export type ShellItemType = 'app' | 'dir' | 'file';
export type ShellItem = ShellApp | ShellDir | ShellFile;

export interface ShellApp {
  id: string;
  appId: AppId;
  iconId: IconId;
  hasFocus: boolean;
  hasSoftFocus: boolean;
  name: string;
  type: 'app';
}

export interface ShellDir {
  id: string;
  iconId: IconId;
  path: string;
  hasFocus: boolean;
  hasSoftFocus: boolean;
  name: string;
  type: 'dir';
}

export interface ShellFile {
  id: string;
  fileTypeId: FileTypeId;
  iconId: IconId;
  hasFocus: boolean;
  hasSoftFocus: boolean;
  name: string;
  path: string;
  type: 'file';
}
