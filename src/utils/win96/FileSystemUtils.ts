import { AppId } from '../../types/App';
import { IconId } from '../../types/Icon';
import {
  FileSystemApp,
  FileSystemDir,
  FileSystemFile,
  FileSystemItem,
  FileSystemShortcut,
} from '../../types/FileSystem';
import { appExists } from './AppUtils';
import { getFileTypeIdFromFileExtension } from './FileTypeUtils';
import { iconExists } from './IconUtils';

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
    type: 'dir',
  };
  r.keys().forEach((key) => {
    const path = key.substring(2).split('/');
    const file = r(key);
    const content =
      typeof file === 'object' && 'default' in file
        ? // if file is a module
          file.default
        : // else
          file ?? '';
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
      const splitCurrentPath = currentPath.split('.');
      const fileName = splitCurrentPath[0] ?? '';
      const extension = splitCurrentPath[splitCurrentPath.length - 1] ?? '';
      const type = splitCurrentPath[splitCurrentPath.length - 2] ?? '';

      // If Dir infos
      if (extension === 'ts' && type === 'dir') {
        updateFsDirInfos(
          currentFsNode,
          content as { iconId?: string; name?: string }
        );
      }

      // If App
      if (
        extension === 'ts' &&
        type === 'app' &&
        isContentValid(content, currentPath, ['appId'])
      ) {
        currentFsNode.dir[currentPath] = getFsApp(content as { appId: string });
      }

      // If Shortcut
      if (
        extension === 'ts' &&
        type === 'ink' &&
        isContentValid(content, currentPath, ['toAppId', 'iconId', 'name'])
      ) {
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
      // }

      // If content is a File
      if (['jpg', 'png', 'txt'].includes(extension)) {
        currentFsNode.dir[currentPath] = getFsFile(
          content as string,
          fileName,
          extension
        );
      }
      return;
    }

    // If dir
    if (!(currentPath in currentFsNode.dir)) {
      const newDir: FileSystemDir = {
        dir: {},
        name: currentPath,
        type: 'dir',
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
  if (content.iconId && !iconExists(content.iconId)) {
    console.error(`Icon Id "${content.iconId}" doesn't exist in Icon List`);
  }
  fsDir.iconId = (content.iconId ?? fsDir.iconId) as IconId;
  fsDir.name = content.name ?? fsDir.name;
};

const getFsApp = (content: { appId: string }): FileSystemApp => {
  if (!appExists(content.appId)) {
    console.error(`App Id "${content.appId}" doesn't exist in App List`);
  }
  return {
    appId: content.appId as AppId,
    type: 'app',
  };
};

const getFsFile = (
  content: string,
  fileName: string,
  fileExtension: string
): FileSystemFile => {
  return {
    content,
    fileTypeId: getFileTypeIdFromFileExtension(fileExtension),
    name: fileName,
    type: 'file',
  };
};

const getFsShortcut = (content: {
  toAppId: string;
  iconId: string;
  name: string;
  filePath?: string;
  dirPath?: string;
}): FileSystemShortcut => {
  if (!iconExists(content.iconId)) {
    console.error(`Icon Id "${content.iconId}" doesn't exist in Icon List`);
  }
  if (!appExists(content.toAppId)) {
    console.error(`App Id "${content.toAppId}" doesn't exist in App List`);
  }
  return {
    dirPath: content.dirPath,
    filePath: content.filePath,
    iconId: content.iconId as IconId,
    name: content.name as string,
    toAppId: content.toAppId as AppId,
    type: 'shortcut',
  };
};

const isContentValid = (
  content: unknown,
  currentPath: string,
  fields: string[]
): boolean => {
  if (!content || typeof content !== 'object') {
    console.error(`fsItem is not an object in file ${currentPath}`);
    return false;
  }

  return (
    fields.filter((field) => {
      const hasField = field in (content as Record<string, unknown>);
      if (!hasField) {
        console.error(`Field ${field} doesn't exist in file ${currentPath}`);
      }
      return !hasField;
    }).length === 0
  );
};
