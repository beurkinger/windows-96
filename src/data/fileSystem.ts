import { appList } from './appList';
import { createFs, fileList } from './fileList';
import { FileSystemDir } from '../types/FileSystemItems';

const testFs = createFs();

const floppyDriveFs = {
  name: '3½ Floppy (A:)',
  iconId: 'floppyDrive',
  dir: {},
} as const;

export const cdDriveFs = {
  name: '(D:)',
  iconId: 'cdDrive',
  dir: {},
} as const;

export const startMenuFs = {
  name: 'Start Menu',
  dir: {
    programs: {
      name: 'Programs',
      iconId: 'programs',
      dir: {
        accessories: {
          name: 'Accessories',
          iconId: 'programs',
          dir: {
            multimedia: {
              name: 'Multimedia',
              iconId: 'programs',
              dir: {
                cdPlayer: {
                  appId: appList.cdPlayer.id,
                },
                soundRecord: {
                  appId: appList.soundRecorder.id,
                },
                volumeControl: {
                  appId: appList.volumeControl.id,
                },
                mediaPlayer: {
                  appId: appList.mediaPlayer.id,
                },
              },
            },
            systemTools: {
              name: 'System Tools',
              iconId: 'programs',
              dir: {
                defrag: {
                  appId: appList.defrag.id,
                },
                scandisk: {
                  appId: appList.scandisk.id,
                },
              },
            },
            calc: {
              appId: appList.calc.id,
            },
            hyperterminal: {
              appId: appList.hyperterminal.id,
            },
            notepad: {
              appId: appList.notepad.id,
            },
            register: {
              appId: appList.register.id,
            },
            msPaint: {
              appId: appList.msPaint.id,
            },
            phoneDialer: {
              appId: appList.phoneDialer.id,
            },
            wordpad: {
              appId: appList.wordpad.id,
            },
          },
        },
        startUp: {
          name: 'StartUp',
          iconId: 'programs',
          dir: {},
        },
        exchange: {
          appId: appList.exchange.id,
        },
        msDos: {
          appId: appList.msDos.id,
        },
        msn: {
          appId: appList.msn.id,
        },
        explorer: {
          appId: appList.explorer.id,
        },
      },
    },
    documents: {
      name: 'Documents',
      iconId: 'documents',
      dir: {
        readMe: {
          name: 'Readme',
          iconId: 'notepadDoc',
          fileTypeId: 'notepadDoc',
          content: '',
        },
      },
    },
    settings: {
      name: 'Settings',
      iconId: 'settings',
      dir: {
        controlPanel: {
          iconId: 'controlPanel',
          dirPath: 'controlPanel',
          name: 'Control Panel',
          toAppId: 'myComputer',
        },
        printers: {
          appId: appList.printers.id,
        },
        taskbar: {
          appId: appList.taskbar.id,
        },
      },
    },
    find: {
      name: 'Find',
      iconId: 'find',
      dir: {
        findFiles: {
          name: 'Files or Folders...',
          iconId: appList.find.iconId,
          appId: appList.find.id,
          dir: {},
        },
        findComputers: {
          name: 'Computers...',
          iconId: appList.findComputer.iconId,
          appId: appList.findComputer.id,
          dir: {},
        },
      },
    },
    help: {
      appId: appList.help.id,
    },
    run: {
      appId: appList.run.id,
    },
    shutdown: {
      appId: appList.shutdown.id,
    },
  },
} as const;

export const hardDriveFs = {
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
          name: 'StartMenu',
          dir: {
            programs: startMenuFs.dir.programs,
          },
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
          content: fileList['c:/windows/clouds.png'],
          name: 'Clouds',
          fileTypeId: 'bmpFile',
        },
        forest: {
          content: fileList['c:/windows/forest.png'],
          name: 'Forest',
          fileTypeId: 'bmpFile',
        },
        readme: {
          content: fileList['c:/windows/readme.txt'],
          name: 'Readme',
          fileTypeId: 'notepadDoc',
        },
      },
    },
  },
} as const;

export const controlPanelFs = {
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
} as const;

export const fileSystem = {
  name: 'My Computer',
  iconId: appList.myComputer.iconId,
  dir: {
    'a:': floppyDriveFs,
    'c:': hardDriveFs,
    'e:': testFs,
    'd:': cdDriveFs,
    controlPanel: controlPanelFs,
    printers: {
      appId: 'printers',
    },
    dialUpNetwork: {
      appId: 'dialUpNetwork',
    },
  },
} as const;

const typedFileSystem: FileSystemDir = fileSystem as typeof fileSystem;

export default typedFileSystem;
