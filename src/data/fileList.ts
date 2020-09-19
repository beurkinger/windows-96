import { FileSystemDir, FileSystemFile } from '../types/FileSystemItems';
import { IconId } from './iconList';

export type FileList = { [filePath: string]: string };

function importFiles() {
  const importedFiles = {} as FileList;
  const r = require.context('../assets/files', true, /\.(png|ts|txt)$/);

  /// TEST
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
  // TEST

  r.keys().forEach((key) => {
    const content = r(key) ?? '';
    importedFiles[key.substring(2)] =
      typeof content === 'object' && 'default' in content
        ? content.default
        : content;
  });
  return importedFiles;
}

const addFileToFs = (
  path: string[],
  content: string | { iconId?: IconId; name?: string },
  fsNode = {} as FileSystemDir
): void => {
  const pathLength = path.length;
  let currentFsNode = fsNode;
  path.forEach((currentPath, i) => {
    // If dir infos
    if (i + 1 === pathLength && currentPath === 'info.ts') {
      if (!content || typeof content !== 'object') return;
      currentFsNode.iconId = content.iconId ?? currentFsNode.iconId;
      currentFsNode.name = content.name ?? currentFsNode.name;
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
