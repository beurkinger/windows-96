import { AppId, appList } from './appList';
import { FileTypeId } from './fileTypeList';
import { IconId } from './iconList';

export type FileSystemPath = string[];

export type FileSystemItem = FileSystemApp | FileSystemDir | FileSystemFile;

export type FileSystemApp = {
  appId: AppId;
};

export type FileSystemDir = {
  dir: { [key: string]: FileSystemItem };
  iconId?: IconId;
  name: string;
};

export type FileSystemFile = {
  content: string;
  fileTypeId: FileTypeId;
  name: string;
};

export const getDirFromPath = (
  path: FileSystemPath,
  currentDirNode: FileSystemDir = fileSystem
): FileSystemDir => {
  if (path.length === 0 || !(path[0] in currentDirNode.dir)) {
    return currentDirNode;
  }

  const nextNode = currentDirNode.dir[path[0]];
  const [, ...nextPath] = path;

  if (!('dir' in nextNode)) return currentDirNode;

  return getDirFromPath(nextPath, nextNode);
};

// export const getFileFromPath = (
//   path: FileSystemPath,
//   currentDirNode: FileSystemDir = fileSystem
// ): FileSystemDir => {
//   if (path.length === 0 || !(path[0] in currentDirNode.dir)) {
//     return currentDirNode;
//   }

//   const nextNode = currentDirNode.dir[path[0]];
//   const [, ...nextPath] = path;

//   if (!('dir' in nextNode)) return currentDirNode;

//   return getDirFromPath(nextPath, nextNode);
// };

const fileSystem = {
  name: 'root',
  dir: {
    a: {
      name: '3½ Floppy (A:)',
      iconId: 'floppyDrive',
      dir: {},
    },
    c: {
      name: '(C:)',
      iconId: 'hardDrive',
      dir: {
        programFiles: {
          name: 'Program Files',
          dir: {},
        },
        windows: {
          name: 'Windows',
          dir: {
            command: {
              name: 'Command',
              dir: {},
            },
            config: {
              name: 'Config',
              dir: {},
            },
            cursors: {
              name: 'Cursors',
              dir: {},
            },
            desktop: {
              name: 'Desktop',
              dir: {
                myComputer: {
                  appId: appList.myComputer.id,
                },
                networkNeighborhood: {
                  appId: appList.networkNeighborhood.id,
                },
                briefcase: {
                  appId: appList.briefcase.id,
                },
                bin: {
                  appId: appList.binEmpty.id,
                },
              },
            },
            fonts: {
              name: 'Fonts',
              dir: {},
            },
            help: {
              name: 'Help',
              dir: {},
            },
            inf: {
              name: 'Inf',
              dir: {},
            },
            pif: {
              name: 'Pif',
              dir: {},
            },
            media: {
              name: 'Media',
              dir: {},
            },
            recent: {
              name: 'Recent',
              dir: {},
            },
            sendTo: {
              name: 'SendTo',
              dir: {},
            },
            shellNew: {
              name: 'ShellNew',
              dir: {},
            },
            spool: {
              name: 'Spool',
              dir: {},
            },
            startMenu: {
              name: 'Start Menu',
              dir: {},
            },
            sysbckup: {
              name: 'Sysbckup',
              dir: {},
            },
            temp: {
              name: 'Temp',
              dir: {},
            },
            readMe: {
              content: "Hello I'm a Readme file",
              name: 'Readme',
              fileTypeId: 'notepadDoc',
            },
          },
        },
      },
    },
    d: {
      name: '(D:)',
      iconId: 'cdDrive',
      dir: {},
    },
    controlPanel: {
      appId: 'controlPanel',
    },
    printers: {
      appId: 'printers',
    },
    dialUpNetwork: {
      appId: 'dialUpNetwork',
    },
  },
} as const;

const typedFileSystem: FileSystemDir = fileSystem;

export default typedFileSystem as typeof fileSystem;
