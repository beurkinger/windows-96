import { v4 as uuid } from 'uuid';

import {
  FileSystemApp,
  FileSystemDir,
  FileSystemFile,
} from '../../types/FileSystem';
import { ShellItem } from '../../types/Shell';
import { appList } from '../../data/appList';
import fileTypeList from '../../data/fileTypeList';

export const getShellItems = (
  fileSystemDir: FileSystemDir,
  sorted = true
): ShellItem[] => {
  console.log(fileSystemDir)
  const gridFiles = Object.values(fileSystemDir.dir).map((item, i) => {
    // If App
    if ('appId' in item) {
      console.log(item)
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

  if (sorted) {
    const locale = new Intl.Collator('en', { sensitivity: 'base' });
    gridFiles.sort((a, b) => {
      if (a.type === 'dir' && b.type !== 'dir') return -1;
      if (a.type !== 'dir' && b.type === 'dir') return 1;
      return locale.compare(a.name, b.name);
    });
  }

  return gridFiles;
};

const getShellApp = (
  fileSystemApp: FileSystemApp,
  hasSoftFocus: boolean
): ShellItem => {
  return {
    appId: fileSystemApp.appId,
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
  fileSystemDir,
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
  fileSystemFile,
  fileTypeId: fileSystemFile.fileTypeId,
  id: uuid(),
  iconId: fileTypeList[fileSystemFile.fileTypeId].iconId,
  hasFocus: false,
  hasSoftFocus,
  name: fileSystemFile.name,
  type: 'file',
});
