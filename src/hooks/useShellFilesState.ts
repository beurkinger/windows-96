import { useState } from 'preact/hooks';
import { v4 as uuid } from 'uuid';

import { AppId, appList } from '../data/appList';

import {
  FileSystemApp,
  FileSystemDir,
  FileSystemFile,
} from '../data/filesystem';
import fileTypeList, { FileTypeId } from '../data/fileTypeList';
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
  fileSystemDir: FileSystemDir;
  hasFocus: boolean;
  hasSoftFocus: boolean;
  name: string;
  type: 'dir';
}

export interface ShellFile {
  id: string;
  fileTypeId: FileTypeId;
  iconId: IconId;
  fileSystemFile: FileSystemFile;
  hasFocus: boolean;
  hasSoftFocus: boolean;
  name: string;
  type: 'file';
}

const getShellApp = (
  fileSystemApp: FileSystemApp,
  hasSoftFocus: boolean
): ShellItem => ({
  appId: appList[fileSystemApp.appId].id,
  id: uuid(),
  iconId: appList[fileSystemApp.appId].iconId,
  hasFocus: false,
  hasSoftFocus,
  name: appList[fileSystemApp.appId].name,
  type: 'app',
});

const getShellDir = (
  fileSystemDir: FileSystemDir,
  hasSoftFocus: boolean
): ShellItem => ({
  id: uuid(),
  iconId: fileSystemDir.iconId ?? 'folderClosed',
  fileSystemDir,
  hasFocus: false,
  hasSoftFocus,
  name: fileSystemDir.name,
  type: 'dir',
});

const getShellFile = (
  fileSystemFile: FileSystemFile,
  hasSoftFocus: boolean
): ShellItem => ({
  fileTypeId: fileSystemFile.fileTypeId,
  id: uuid(),
  iconId: fileTypeList[fileSystemFile.fileTypeId].iconId,
  fileSystemFile,
  hasFocus: false,
  hasSoftFocus,
  name: fileSystemFile.name,
  type: 'file',
});

const createShellItems = (fileSystemNode: FileSystemDir): ShellItem[] => {
  const gridFiles = Object.values(fileSystemNode.dir).map((item, i) => {
    // If App
    if ('appId' in item) {
      return getShellApp(item as FileSystemApp, i === 0);
    }
    // If File
    if ('fileTypeId' in item) {
      return getShellFile(item as FileSystemFile, i === 0);
    }
    // Else Dir
    return getShellDir(item as FileSystemDir, i === 0);
  });
  return gridFiles;
};

export const useShellFilesState = (
  fileSystemNode: FileSystemDir
): {
  files: ShellItem[];
  focusOnFile: (fileId: string, fileType: string) => void;
  removeFocus: () => void;
} => {
  const [files, setFiles] = useState<ShellItem[]>(
    createShellItems(fileSystemNode)
  );

  const focusOnFile = (fileId: string, fileType: string) => {
    setFiles(
      files.map((file) => ({
        ...file,
        hasFocus: file.type === fileType && file.id === fileId,
        hasSoftFocus: file.type === fileType && file.id === fileId,
      }))
    );
  };

  const removeFocus = () => {
    setFiles(
      files.map((file) => ({
        ...file,
        hasFocus: false,
        hasSoftFocus: file.hasFocus,
      }))
    );
  };

  return { files, focusOnFile, removeFocus };
};

export default useShellFilesState;
