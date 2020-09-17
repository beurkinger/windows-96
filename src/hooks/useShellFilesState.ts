import { useEffect, useState } from 'preact/hooks';
import { v4 as uuid } from 'uuid';

import { AppId, appList } from '../data/appList';

import {
  FileSystemApp,
  FileSystemDir,
  FileSystemFile,
  getDirFromPath,
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

const createShellItems = (workingDir: string): ShellItem[] => {
  const fileSystemDir = getDirFromPath(workingDir);
  const gridFiles = Object.entries(fileSystemDir.dir).map(
    ([dirKey, item], i) => {
      const path = workingDir + '/' + dirKey;
      // If App
      if ('appId' in item) {
        return getShellApp(item as FileSystemApp, i === 0);
      }
      // If File
      if ('fileTypeId' in item) {
        return getShellFile(item as FileSystemFile, i === 0);
      }
      // Else Dir
      return getShellDir(item as FileSystemDir, path, i === 0);
    }
  );

  // console.log(workingDir, fileSystemDir);

  return gridFiles;
};

export const useShellFilesState = (
  workingDir: string
): {
  files: ShellItem[];
  focusOnFile: (fileId: string) => void;
  removeFocus: () => void;
} => {
  console.log(workingDir);
  const [files, setFiles] = useState<ShellItem[]>([]);

  useEffect(() => {
    setFiles(() => createShellItems(workingDir));
    return () => {
      console.log('unmount')
    }
  }, []);

  const focusOnFile = (fileId: string) => {
    setFiles((f) =>
      f.map((file) => ({
        ...file,
        hasFocus: file.id === fileId,
        hasSoftFocus: file.id === fileId,
      }))
    );
  };

  const removeFocus = () => {
    setFiles((f) =>
      f.map((file) => ({
        ...file,
        hasFocus: false,
        hasSoftFocus: file.hasFocus,
      }))
    );
  };

  return { files, focusOnFile, removeFocus };
};

export default useShellFilesState;
