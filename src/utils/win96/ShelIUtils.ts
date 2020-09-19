import { v4 as uuid } from 'uuid';

import {
  FileSystemApp,
  FileSystemDir,
  FileSystemFile,
} from '../../types/FileSystem';
import { ShellItem } from '../../types/Shell';
import { appList } from '../../data/appList';
import fileTypeList from '../../data/fileTypeList';

const getShellApp = (
  fileSystemApp: FileSystemApp,
  hasSoftFocus: boolean
): ShellItem => {
  return {
    appId: appList[fileSystemApp.appId].id,
    id: uuid(),
    iconId: appList[fileSystemApp.appId].iconId,
    hasFocus: false,
    hasSoftFocus,
    name: appList[fileSystemApp.appId].name,
    type: 'app',
  };
};

const getShellDir = (
  fileSystemDir: FileSystemDir,
  hasSoftFocus: boolean
): ShellItem => ({
  fileSystemNode: fileSystemDir,
  id: uuid(),
  iconId: fileSystemDir.iconId ?? 'folderClosed',
  hasFocus: false,
  hasSoftFocus,
  name: fileSystemDir.name,
  type: 'dir',
});

const getShellFile = (
  fileSystemFile: FileSystemFile,
  hasSoftFocus: boolean
): ShellItem => ({
  fileSystemNode: fileSystemFile,
  fileTypeId: fileSystemFile.fileTypeId,
  id: uuid(),
  iconId: fileTypeList[fileSystemFile.fileTypeId].iconId,
  hasFocus: false,
  hasSoftFocus,
  name: fileSystemFile.name,
  type: 'file',
});

export const getShellItems = (fileSystemDir: FileSystemDir): ShellItem[] => {
  const gridFiles = Object.values(fileSystemDir.dir).map((item, i) => {
    // If App
    if ('appId' in item) {
      return getShellApp(item as FileSystemApp, i === 0);
    }
    // If File
    if ('fileTypeId' in item) {
      return getShellFile(item as FileSystemFile, i === 0);
    }
    //TODO : need to implement shortcuts :(

    // Else Dir
    return getShellDir(item as FileSystemDir, i === 0);
  });

  return gridFiles;
};
