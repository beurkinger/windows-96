import { v4 as uuid } from 'uuid';

import {
  FileSystemApp,
  FileSystemDir,
  FileSystemFile,
} from '../types/FileSystemItems';
import { ShellItem } from '../types/ShellItems';
import { appList } from '../data/appList';
import fileTypeList from '../data/fileTypeList';
import { getDirFromPath } from './FileSystemUtils';

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
  path: string,
  hasSoftFocus: boolean
): ShellItem => ({
  id: uuid(),
  iconId: fileSystemDir.iconId ?? 'folderClosed',
  hasFocus: false,
  hasSoftFocus,
  name: fileSystemDir.name,
  path,
  type: 'dir',
});

const getShellFile = (
  fileSystemFile: FileSystemFile,
  path: string,
  hasSoftFocus: boolean
): ShellItem => ({
  fileTypeId: fileSystemFile.fileTypeId,
  id: uuid(),
  iconId: fileTypeList[fileSystemFile.fileTypeId].iconId,
  hasFocus: false,
  hasSoftFocus,
  name: fileSystemFile.name,
  path,
  type: 'file',
});

export const getShellItemsFromPath = (workingDir: string): ShellItem[] => {
  const fileSystemDir = getDirFromPath(workingDir);
  const gridFiles = Object.entries(fileSystemDir.dir).map(
    ([dirKey, item], i) => {
      const path = workingDir.length ? workingDir + '/' + dirKey : dirKey;

      // If App
      if ('appId' in item) {
        return getShellApp(item as FileSystemApp, i === 0);
      }
      // If File
      if ('fileTypeId' in item) {
        return getShellFile(item as FileSystemFile, path, i === 0);
      }
      // Else Dir
      return getShellDir(item as FileSystemDir, path, i === 0);
    }
  );

  return gridFiles;
};
