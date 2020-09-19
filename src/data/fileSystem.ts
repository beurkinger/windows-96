import { appList } from './appList';
import { createFs } from './fileList';
import { FileSystemDir } from '../types/FileSystemItems';

const floppyDriveFs = createFs(
  require.context('../assets/files/a', true, /\.(png|ts|txt)$/)
);
const cdDriveFs = createFs(
  require.context('../assets/files/d', true, /\.(png|ts|txt)$/)
);
const hardDriveFs = createFs(
  require.context('../assets/files/c', true, /\.(png|ts|txt)$/)
);
const controlPanelFs = createFs(
  require.context('../assets/files/Control Panel', true, /\.(png|ts|txt)$/)
);

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

export const fileSystem = {
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

const typedFileSystem: FileSystemDir = fileSystem as typeof fileSystem;

export default typedFileSystem;
