import { appList } from './appList';
import { FileSystemDir } from '../types/FileSystemItems';
import { createFs, getDirFromPath } from '../utils/FileSystemUtils';

const floppyDriveFs = createFs(
  require.context('../assets/fileSystem/a', true, /\.(png|ts|txt)$/)
);
const cdDriveFs = createFs(
  require.context('../assets/fileSystem/d', true, /\.(png|ts|txt)$/)
);
const hardDriveFs = createFs(
  require.context('../assets/fileSystem/c', true, /\.(png|ts|txt)$/)
);
const controlPanelFs = createFs(
  require.context('../assets/fileSystem/Control Panel', true, /\.(png|ts|txt)$/)
);

export const startMenuFs = {
  name: 'Start Menu',
  dir: {
    programs: getDirFromPath('Windows/StartMenu/Programs', hardDriveFs),
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
