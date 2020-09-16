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
}

const getFileGridApp = (
  item: FileSystemApp,
  hasSoftFocus: boolean
): FileGridItem => ({
  id: getRandomId(item.appId),
  iconId: appList[item.appId].iconId,
  hasFocus: false,
  hasSoftFocus,
  name: appList[item.appId].name,
  type: 'app',
  value: appList[item.appId].id,
  // workingDir,
});

const getFileGridDir = (
  item: FileSystemDir,
  hasSoftFocus: boolean
): FileGridItem => ({
  id: getRandomId(item.name),
  iconId: item.iconId ?? 'folderClosed',
  hasFocus: false,
  hasSoftFocus,
  name: item.name,
  type: 'dir',
  value: item,
  // workingDir,
});

const getFileGridFile = (
  item: FileSystemFile,
  hasSoftFocus: boolean
): FileGridItem => ({
  id: getRandomId(item.name),
  iconId: 'program',
  hasFocus: false,
  hasSoftFocus,
  name: item.name,
  type: 'file',
  value: item.content,
  // workingDir,
});

const createFileGridItems = (fileSystemNode: FileSystemDir): FileGridItem[] => {
  const gridFiles = Object.values(fileSystemNode.dir).map((item, i) => {
    // If App
    if ('appId' in item) {
      return getFileGridApp(item as FileSystemApp, i === 0);
    }
    // If File
    if ('openWith' in item) {
      return getFileGridFile(item as FileSystemFile, i === 0);
    }
    // Else Dir
    return getFileGridDir(item as FileSystemDir, i === 0);
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
