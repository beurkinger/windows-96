import { AppId, appList } from './appList';
import { IconId } from './iconList';

export type FileSystemItem = FileSystemApp | FileSystemDir | FileSystemFile;

export type FileSystemDir = {
  dir: { [key: string]: FileSystemItem };
  iconId?: IconId;
  name: string;
};

export type FileSystemApp = {
  appId: AppId;
};

export type FileSystemFile = {
  content: string;
  fileType: string;
  name: string;
};

const fileSystem = {
  name: 'root',
  dir: {
    a: {
      name: '3½ Floppy (A:)',
      iconId: 'floppyDrive',
      dir: {},
    },
    c: {
      name: 'C:',
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
          },
        },
      },
    },
    d: {
      name: 'D:',
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
