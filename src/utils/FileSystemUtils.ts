import {
  FileSystemDir,
  FileSystemFile,
  FileSystemItem,
} from '../types/FileSystemItems';
import fileSystem from '../data/fileSystem';

export const getDirFromPath = (
  path: string,
  currentDirNode: FileSystemDir = fileSystem
): FileSystemDir => {
  const pathArray = path.split('/').filter((p) => p.length);

  if (pathArray.length === 0 || !(pathArray[0] in currentDirNode.dir)) {
    return currentDirNode;
  }

  const nextNode = currentDirNode.dir[pathArray[0]];
  if (!('dir' in nextNode)) return currentDirNode;

  const [, ...nextPathArray] = pathArray;
  const nextPath = nextPathArray.join('/');

  return getDirFromPath(nextPath, nextNode);
};

export const getFileFromPath = (
  path: string,
  currentNode: FileSystemItem = fileSystem
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
