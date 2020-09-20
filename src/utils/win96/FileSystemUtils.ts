import { AppId, appIds } from '../../types/App';
import { IconId, iconList } from '../../data/iconList';
import {
  FileSystemApp,
  FileSystemDir,
  FileSystemFile,
  FileSystemItem,
  FileSystemShortcut,
} from '../../types/FileSystem';
import { getFileTypeIdFromFileExtension } from './FileTypeUtils';

export const getDirFromPath = (
  path: string,
  currentDirNode: FileSystemDir
): FileSystemDir => {
  const pathArray = path.split('/').filter((p) => p.length);

  if (pathArray.length === 0) {
    return currentDirNode;
  }

  if (!(pathArray[0] in currentDirNode.dir)) {
    console.error(
      `"Folder "${pathArray[0]}" doesn't exist in "${currentDirNode.name}"`
    );
    return currentDirNode;
  }

  const nextNode = currentDirNode.dir[pathArray[0]];
  if (!('dir' in nextNode) || !('name' in nextNode)) {
    console.error(
      `"Item "${pathArray[0]}" in "${currentDirNode.name}" is not a folder.`
    );
    return currentDirNode;
  }

  const [, ...nextPathArray] = pathArray;
  const nextPath = nextPathArray.join('/');

  return getDirFromPath(nextPath, nextNode);
};

export const getFileFromPath = (
  path: string,
  currentNode: FileSystemItem
): FileSystemFile | null => {
  const pathArray = path.split('/').filter((p) => p.length);

  if (pathArray.length === 0) {
    return 'fileTypeId' in currentNode ? currentNode : null;
  }

  if (!('dir' in currentNode)) return null;
  const currentDirNode = (currentNode as unknown) as FileSystemDir;

  if (!(pathArray[0] in currentDirNode.dir)) return null;

  const nextNode = currentDirNode.dir[pathArray[0]];

  const [, ...nextPathArray] = pathArray;
  const nextPath = nextPathArray.join('/');

  return getFileFromPath(nextPath, nextNode);
};

export const createFs = (
  r: __WebpackModuleApi.RequireContext
): FileSystemDir => {
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
    addItemToFs(path, content, fs);
  });
  return fs;
};

const addItemToFs = (
  path: string[],
  content: string | Record<string, unknown>,
  fsNode = {} as FileSystemDir
): void => {
  const pathLength = path.length;
  let currentFsNode = fsNode;
  path.forEach((currentPath, i) => {
    // If end of path
    if (i + 1 === pathLength) {
      // If content is an object
      if (content && typeof content === 'object') {
        // If Dir infos
        if (currentPath === 'info.ts') {
          updateFsDirInfos(currentFsNode, content);
        }
        // If App
        if ('appId' in content) {
          currentFsNode.dir[currentPath] = getFsApp(
            content as { appId: string }
          );
        }
        // If Shortcut
        if ('toAppId' in content && 'iconId' in content && 'name' in content) {
          currentFsNode.dir[currentPath] = getFsShortcut(
            content as {
              toAppId: string;
              iconId: string;
              name: string;
              filePath?: string;
              dirPath?: string;
            }
          );
        }
      }
      // If content is a File
      if (typeof content === 'string') {
        currentFsNode.dir[currentPath] = getFsFile(content, currentPath);
      }
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

const updateFsDirInfos = (
  fsDir: FileSystemDir,
  content: { iconId?: string; name?: string }
): void => {
  if (content.iconId && !(content.iconId in iconList)) {
    console.error(`Icon Id "${content.iconId}" doesn't exist in Icon List`);
  }
  fsDir.iconId = (content.iconId ?? fsDir.iconId) as IconId;
  fsDir.name = content.name ?? fsDir.name;
};

const getFsApp = (content: { appId?: string }): FileSystemApp => {
  if (content.appId && !(content.appId in appIds)) {
    console.error(`Icon Id "${content.appId}" doesn't exist in App List`);
  }
  return {
    appId: content.appId as AppId,
  };
};

const getFsFile = (content: string, currentPath: string): FileSystemFile => {
  const [fileName, fileExtension] = currentPath.split('.');
  return {
    content,
    fileTypeId: getFileTypeIdFromFileExtension(fileExtension),
    name: fileName,
  };
};

const getFsShortcut = (content: {
  toAppId: string;
  iconId: string;
  name: string;
  filePath?: string;
  dirPath?: string;
}): FileSystemShortcut => {
  if (content.iconId && !(content.iconId in appIds)) {
    console.error(`Icon Id "${content.iconId}" doesn't exist in Icon List`);
  }
  if (content.toAppId && !(content.toAppId in appIds)) {
    console.error(`App Id "${content.toAppId}" doesn't exist in App List`);
  }
  return {
    dirPath: content.dirPath,
    filePath: content.filePath,
    iconId: content.iconId as IconId,
    name: content.name,
    toAppId: content.toAppId as AppId,
  };
};
