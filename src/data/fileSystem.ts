import { FileSystemDir } from '../types/FileSystemItems';
import { appList } from './appList';
import clouds from '../assets/img/various/clouds.png';
import forest from '../assets/img/various/forest.png';
import windowsReadme from './fileSystem/myComputer/c/windows/readme';

const floppyDriveFs: FileSystemDir = {
  name: '3½ Floppy (A:)',
  iconId: 'floppyDrive',
  dir: {},
} as const;

const cdDriveFs: FileSystemDir = {
  name: '(D:)',
  iconId: 'cdDrive',
  dir: {},
} as const;

const startMenuFs: FileSystemDir = {
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
                  name: appList.cdPlayer.name,
                  iconId: appList.cdPlayer.iconId,
                  // value: appList.cdPlayer.id,
                  dir: {},
                },
                soundRecord: {
                  name: appList.soundRecorder.name,
                  iconId: appList.soundRecorder.iconId,
                  // value: appList.soundRecorder.id,
                  dir: {},
                },
                volumeControl: {
                  name: appList.volumeControl.name,
                  iconId: appList.volumeControl.iconId,
                  // value: appList.volumeControl.id,
                  dir: {},
                },
                mediaPlayer: {
                  name: appList.mediaPlayer.name,
                  iconId: appList.mediaPlayer.iconId,
                  // value: appList.mediaPlayer.id,
                  dir: {},
                },
              },
            },
            systemTools: {
              name: 'System Tools',
              iconId: 'programs',
              dir: {
                defrag: {
                  name: appList.defrag.name,
                  iconId: appList.defrag.iconId,
                  // value: appList.defrag.id,
                  dir: {},
                },
                scandisk: {
                  name: appList.scandisk.name,
                  iconId: appList.scandisk.iconId,
                  // value: appList.scandisk.id,
                  dir: {},
                },
              },
            },
            calc: {
              name: appList.calc.name,
              iconId: appList.calc.iconId,
              // value: appList.calc.id,
              dir: {},
            },
            hyperterminal: {
              name: appList.hyperterminal.name,
              iconId: appList.hyperterminal.iconId,
              // value: appList.hyperterminal.id,
              dir: {},
            },
            notepad: {
              name: appList.notepad.name,
              iconId: appList.notepad.iconId,
              // value: appList.notepad.id,
              dir: {},
            },
            register: {
              name: appList.register.name,
              iconId: appList.register.iconId,
              // value: appList.register.id,
              dir: {},
            },
            msPaint: {
              name: appList.msPaint.name,
              iconId: appList.msPaint.iconId,
              // value: appList.msPaint.id,
              dir: {},
            },
            phoneDialer: {
              name: appList.phoneDialer.name,
              iconId: appList.phoneDialer.iconId,
              // value: appList.phoneDialer.id,
              dir: {},
            },
            wordpad: {
              name: appList.wordpad.name,
              iconId: appList.wordpad.iconId,
              // value: appList.wordpad.id,
              dir: {},
            },
          },
        },
        startUp: {
          name: 'StartUp',
          iconId: 'programs',
          dir: {},
        },
        exchange: {
          name: appList.exchange.name,
          iconId: appList.exchange.iconId,
          // value: appList.exchange.id,
          dir: {},
        },
        msDos: {
          name: appList.msDos.name,
          iconId: appList.msDos.iconId,
          // value: appList.msDos.id,
          dir: {},
        },
        msn: {
          name: appList.msn.name,
          iconId: appList.msn.iconId,
          // value: appList.msn.id,
          dir: {},
        },
        explorer: {
          name: appList.explorer.name,
          iconId: appList.explorer.iconId,
          // value: appList.explorer.id,
          dir: {},
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
          dir: {},
        },
      },
    },
    settings: {
      name: 'Settings',
      iconId: 'settings',
      dir: {
        controlPanel: {
          name: appList.controlPanel.name,
          iconId: appList.controlPanel.iconId,
          // value: appList.controlPanel.id,
          dir: {},
        },
        printers: {
          name: appList.printers.name,
          iconId: appList.printers.iconId,
          // value: appList.printers.id,
          dir: {},
        },
        taskbar: {
          name: appList.taskbar.name,
          iconId: appList.taskbar.iconId,
          // value: appList.taskbar.id,
          dir: {},
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
          // value: appList.find.id,
          dir: {},
        },
        findComputers: {
          name: 'Computers...',
          iconId: appList.findComputer.iconId,
          // value: appList.findComputer.id,
          dir: {},
        },
      },
    },
    help: {
      name: appList.help.name,
      iconId: appList.help.iconId,
      // value: appList.help.id,
      dir: {},
    },
    run: {
      name: appList.run.name,
      iconId: appList.run.iconId,
      // value: appList.run.id,
      dir: {},
    },
    shutdown: {
      name: appList.shutdown.name,
      iconId: appList.shutdown.iconId,
      appId: appList.shutdown.id,
    },
  },
};

const hardDriveFs: FileSystemDir = {
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
          content: windowsReadme,
          name: 'Readme',
          fileTypeId: 'notepadDoc',
        },
      },
    },
  },
};

const controlPanelFs: FileSystemDir = {
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

const fileSystem = {
  name: 'My Computer',
  iconId: appList.myComputer.iconId,
  dir: {
    'a:': floppyDriveFs,
    'c:': hardDriveFs,
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

export default fileSystem as typeof fileSystem;
