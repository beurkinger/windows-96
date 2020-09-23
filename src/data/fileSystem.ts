import { appList } from './appList';
import { FileSystemDir } from '../types/FileSystem';
import { createFs, getDirFromPath } from '../utils/win96/FileSystemUtils';

export const floppyDriveFs = createFs(
  require.context('../assets/fileSystems/a', true, /\.(jpg|png|ts|txt)$/)
);
export const cdDriveFs = createFs(
  require.context('../assets/fileSystems/d', true, /\.(jpg|png|ts|txt)$/)
);
export const hardDriveFs = createFs(
  require.context('../assets/fileSystems/c', true, /\.(jpg|png|ts|txt)$/)
);
export const controlPanelFs = createFs(
  require.context(
    '../assets/fileSystems/Control Panel',
    true,
    /\.(jpg|png|ts|txt)$/
  )
);
export const recycleBinFs = createFs(
  require.context(
    '../assets/fileSystems/recycleBin',
    true,
    /\.(jpg|png|ts|txt)$/
  )
);

export const startMenuFs = {
  name: 'Start Menu',
  type: 'dir',
  dir: {
    programs: getDirFromPath('Windows/StartMenu/Programs', hardDriveFs),
    documents: {
      name: 'Documents',
      iconId: 'documents',
      type: 'dir',
      dir: {
        readMe: {
          name: 'Readme',
          iconId: 'notepadDoc',
          fileTypeId: 'notepadDoc',
          content: '',
          type: 'file',
        },
      },
    },
    settings: {
      name: 'Settings',
      iconId: 'settings',
      type: 'dir',
      dir: {
        controlPanel: {
          iconId: 'controlPanel',
          dirPath: 'controlPanel',
          name: 'Control Panel',
          toAppId: 'myComputer',
          type: 'shortcut',
        },
        printers: {
          name: 'Printers',
          iconId: 'printers',
          type: 'dir',
          dir: {},
        },
        taskbar: {
          appId: appList.taskbar.id,
          type: 'app',
        },
      },
    },
    find: {
      name: 'Find',
      iconId: 'find',
      type: 'dir',
      dir: {
        findFiles: {
          name: 'Files or Folders...',
          iconId: appList.find.iconId,
          appId: appList.find.id,
          type: 'app',
        },
        findComputers: {
          name: 'Computers...',
          iconId: appList.findComputer.iconId,
          appId: appList.findComputer.id,
          type: 'app',
        },
      },
    },
    help: {
      appId: appList.help.id,
      type: 'app',
    },
    run: {
      appId: appList.run.id,
      type: 'app',
    },
    shutdown: {
      appId: appList.shutdown.id,
      type: 'app',
    },
  },
} as const;

export const myComputerFs = {
  name: 'My Computer',
  iconId: appList.myComputer.iconId,
  type: 'dir',
  dir: {
    'A:': floppyDriveFs,
    'C:': hardDriveFs,
    'D:': cdDriveFs,
    controlPanel: controlPanelFs,
    printers: {
      name: 'Printers',
      iconId: 'printers',
      type: 'dir',
      dir: {},
    },
    dialUpNetwork: {
      appId: 'dialUpNetwork',
      type: 'app',
    },
  },
} as const;

const typedMyComputerFs: FileSystemDir = myComputerFs as typeof myComputerFs;

export default typedMyComputerFs;
