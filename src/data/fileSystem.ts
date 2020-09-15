import { AppId } from './appList';
import { IconId } from './iconList';

export type FileSystemDir = {
  content: { [key: string]: FileSystemApp | FileSystemDir };
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

const fileSystem: FileSystemDir = {
  name: 'root',
  content: {
    a: {
      name: '3½ Floppy (A:)',
      iconId: 'floppyDrive',
      content: {},
    },
    c: {
      name: 'C:',
      iconId: 'hardDrive',
      content: {
        programFiles: {
          name: 'Program Files',
          content: {},
        },
        windows: {
          name: 'Windows',
          content: {
            command: {
              name: 'Command',
              content: {},
            },
            config: {
              name: 'Config',
              content: {},
            },
            cursors: {
              name: 'Cursors',
              content: {},
            },
            desktop: {
              name: 'Desktop',
              content: {},
            },
            fonts: {
              name: 'Fonts',
              content: {},
            },
            help: {
              name: 'Help',
              content: {},
            },
            inf: {
              name: 'Inf',
              content: {},
            },
            pif: {
              name: 'Pif',
              content: {},
            },
            media: {
              name: 'Media',
              content: {},
            },
            recent: {
              name: 'Recent',
              content: {},
            },
            sendTo: {
              name: 'SendTo',
              content: {},
            },
            shellNew: {
              name: 'ShellNew',
              content: {},
            },
            spool: {
              name: 'Spool',
              content: {},
            },
            startMenu: {
              name: 'Start Menu',
              content: {},
            },
            sysbckup: {
              name: 'Sysbckup',
              content: {},
            },
            temp: {
              name: 'Temp',
              content: {},
            },
          },
        },
      },
    },
    d: {
      name: 'D:',
      iconId: 'cdDrive',
      content: {},
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
};

export default fileSystem;
