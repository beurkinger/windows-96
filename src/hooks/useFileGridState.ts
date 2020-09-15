import { useState } from 'preact/hooks';
import { appList } from '../data/appList';

import {
  FileSystemApp,
  FileSystemDir,
  FileSystemFile,
} from '../data/filesystem';
import { IconId } from '../data/iconList';
import { getRandomId } from '../utils/RandomUtils';

export type FileGridItemType = 'app' | 'dir' | 'file';
export interface FileGridItem {
  id: string;
  iconId: IconId;
  hasFocus: boolean;
  hasSoftFocus: boolean;
  name: string;
  type: FileGridItemType;
  value: string | FileSystemDir;
  // workingDir: FileSystemDir;
}

const getFileGridApp = (
  item: FileSystemApp
  // workingDir: FileSystemDir
): FileGridItem => ({
  id: getRandomId(item.appId),
  iconId: appList[item.appId].iconId,
  hasFocus: false,
  hasSoftFocus: false,
  name: appList[item.appId].name,
  type: 'app',
  value: appList[item.appId].id,
  // workingDir,
});

const getFileGridDir = (
  item: FileSystemDir,
  dirKey: string
  // workingDir: FileSystemDir
): FileGridItem => ({
  id: getRandomId(dirKey),
  iconId: item.iconId ?? 'folderClosed',
  hasFocus: false,
  hasSoftFocus: false,
  name: item.name,
  type: 'dir',
  value: item,
  // workingDir,
});

const getFileGridFile = (
  item: FileSystemFile
  // workingDir: FileSystemDir
): FileGridItem => ({
  id: getRandomId(item.name),
  iconId: 'program',
  hasFocus: false,
  hasSoftFocus: false,
  name: item.name,
  type: 'file',
  value: item.content,
  // workingDir,
});

const createFileGridItems = (fileSystemNode: FileSystemDir): FileGridItem[] => {
  const gridFiles = Object.entries(fileSystemNode.dir).map(([dirKey, item]) => {
    // If App
    if ('appId' in item) {
      return getFileGridApp(item as FileSystemApp);
    }
    // If File
    if ('openWith' in item) {
      return getFileGridFile(item as FileSystemFile);
    }
    // Else Dir
    return getFileGridDir(item as FileSystemDir, dirKey);
  });
  return gridFiles;
};

export const useFileGridState = (
  fileSystemNode: FileSystemDir
): {
  files: FileGridItem[];
  focusOnFile: (fileId: string, fileType: string) => void;
  removeFocus: () => void;
} => {
  const [files, setFiles] = useState<FileGridItem[]>(
    createFileGridItems(fileSystemNode)
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

export default useFileGridState;
