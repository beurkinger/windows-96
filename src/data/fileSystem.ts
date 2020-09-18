import { FileSystemDir } from '../types/FileSystemItems';
import { appList } from './appList';
import clouds from '../assets/img/various/clouds.png';
import forest from '../assets/img/various/forest.png';

const fileSystem = {
  name: 'root',
  dir: {
    'a:': {
      name: '3½ Floppy (A:)',
      iconId: 'floppyDrive',
      dir: {},
    },
    'c:': {
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
            clouds: {
              content: clouds,
              name: 'Clouds',
              fileTypeId: 'bmpFile',
            },
            forest: {
              content: forest,
              name: 'Forest',
              fileTypeId: 'bmpFile',
            },
            readme: {
              content: "Hello I'm a Readme file",
              name: 'Readme',
              fileTypeId: 'notepadDoc',
            },
          },
        },
      },
    },
    'd:': {
      name: '(D:)',
      iconId: 'cdDrive',
      dir: {},
    },
    controlPanel: {
      name: 'Control Panel',
      iconId: 'controlPanel',
      dir: {
        accessibility: {
          name: 'Accessibility Options',
          iconId: 'accessibility',
          dir: {},
        },
        addHardware: {
          name: 'Add New Hardware',
          iconId: 'addHardware',
          dir: {},
        },
        addRemovePrograms: {
          name: 'Add/Remove Programs',
          iconId: 'addRemovePrograms',
          dir: {},
        },
        dateTime: {
          name: 'Date/Time',
          iconId: 'dateTime',
          dir: {},
        },
        display: {
          name: 'Display',
          iconId: 'display',
          dir: {},
        },
        fonts: {
          name: 'Fonts',
          iconId: 'fontsShortcut',
          dir: {},
        },
        internet: {
          name: 'Internet',
          iconId: 'internet',
          dir: {},
        },
        joystick: {
          name: 'Joystick',
          iconId: 'joystick',
          dir: {},
        },
        keyboard: {
          name: 'Keyboard',
          iconId: 'keyboard',
          dir: {},
        },
        mail: {
          name: 'Mail and Fax',
          iconId: 'exchange',
          dir: {},
        },
        msMail: {
          name: 'Microsoft Mail Postoffice',
          iconId: 'msMail',
          dir: {},
        },
        modems: {
          name: 'Modems',
          iconId: 'modems',
          dir: {},
        },
        mouse: {
          name: 'Mouse',
          iconId: 'mouse',
          dir: {},
        },
        multimedia: {
          name: 'Multimedia',
          iconId: 'multimedia',
          dir: {},
        },
        network: {
          name: 'Network',
          iconId: 'network',
          dir: {},
        },
        passwords: {
          name: 'Passwords',
          iconId: 'passwords',
          dir: {},
        },
        printers: {
          name: 'Printers',
          iconId: 'printersShortcut',
          dir: {},
        },
        regionalSettings: {
          name: 'Regional Settings',
          iconId: 'regionalSettings',
          dir: {},
        },
        sounds: {
          name: 'Sounds',
          iconId: 'sounds',
          dir: {},
        },
        system: {
          name: 'System',
          iconId: 'system',
          dir: {},
        },
      },
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
