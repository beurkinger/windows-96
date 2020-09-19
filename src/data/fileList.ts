import {
  FileSystemApp,
  FileSystemDir,
  FileSystemFile,
  FileSystemShortcut,
} from '../types/FileSystemItems';
import { AppId } from './appList';
import { IconId } from './iconList';

export type FileList = { [filePath: string]: string };

function importFiles() {
  const importedFiles = {} as FileList;
  const r = require.context('../assets/files', true, /\.(png|ts|txt)$/);

  r.keys().forEach((key) => {
    const content = r(key) ?? '';
    importedFiles[key.substring(2)] =
      typeof content === 'object' && 'default' in content
        ? content.default
        : content;
  });
  return importedFiles;
}

export const createFs = (): FileSystemDir => {
  const r = require.context('../assets/files/c', true, /\.(png|ts|txt)$/);
  const fs: FileSystemDir = {
    dir: {},
    name: 'My Computer',
    iconId: 'myComputer',
  };
  r.keys().forEach((key) => {
    const path = key.substring(2).split('/');
    const file = r(key);
    const content =
      typeof file === 'object' && 'default' in file ? file.default : file ?? '';
    addFileToFs(path, content, fs);
  });
  console.log(fs);
  return fs;
};

const addFileToFs = (
  path: string[],
  content:
    | string
    | {
        appId?: AppId;
        dirPath?: string;
        filePath?: string;
        iconId?: IconId;
        name?: string;
        toAppId?: AppId;
      },
  fsNode = {} as FileSystemDir
): void => {
  const pathLength = path.length;
  let currentFsNode = fsNode;
  path.forEach((currentPath, i) => {
    // If end of path and object
    if (i + 1 === pathLength && content && typeof content === 'object') {
      // If Dir infos
      if (currentPath === 'info.ts') {
        console.log(content);
        currentFsNode.iconId = content.iconId ?? currentFsNode.iconId;
        currentFsNode.name = content.name ?? currentFsNode.name;
      }
      // If App
      if ('appId' in content) {
        const newApp: FileSystemApp = {
          appId: content.appId as AppId,
        };
        currentFsNode.dir[currentPath] = newApp;
      }
      // If shortcut
      if ('toAppId' in content && 'iconId' in content && 'name' in content) {
        const newApp: FileSystemShortcut = {
          dirPath: content.dirPath,
          filePath: content.filePath,
          iconId: content.iconId as IconId,
          name: content.name as string,
          toAppId: content.toAppId as AppId,
        };
        currentFsNode.dir[currentPath] = newApp;
      }
      return;
    }

    // If file
    if (i + 1 === pathLength) {
      if (typeof content !== 'string') return;
      const newFile: FileSystemFile = {
        content,
        fileTypeId: 'notepadDoc',
        name: currentPath,
      };
      currentFsNode.dir[currentPath] = newFile;
      return;
    }

    // If dir
    if (!(currentPath in currentFsNode.dir)) {
      const newDir: FileSystemDir = {
        dir: {},
        name: currentPath,
      };
      currentFsNode.dir[currentPath] = newDir;
    }
    currentFsNode = currentFsNode.dir[currentPath] as FileSystemDir;
  });
};

export const fileList = importFiles();
