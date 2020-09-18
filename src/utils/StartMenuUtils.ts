import { FileSystemItem } from '../types/FileSystemItems';
import { appList } from '../data/appList';
import fileTypeList from '../data/fileTypeList';
import { OptionType } from '../components/shared/MenuOption/MenuOption';
import { getDirFromPath, getFileFromPath } from './FileSystemUtils';

export const getProgramsMenuOptions = (item: FileSystemItem): OptionType => {
  // If App
  if ('appId' in item) {
    return {
      label: appList[item.appId].name,
      iconId: appList[item.appId].iconId,
      value: { appId: appList[item.appId].id },
    };
  }
  // If File
  // Right now we simply open the associated app...
  if ('fileTypeId' in item)
    return {
      label: item.name,
      iconId: appList[fileTypeList[item.fileTypeId].appId].iconId,
      value: {
        appId: appList[fileTypeList[item.fileTypeId].appId].id,
        workingFile: item,
      },
    };

  if ('toAppId' in item)
    return {
      label: item.name,
      iconId: item.iconId,
      value: {
        appId: item.toAppId,
        workingDir: item.dirPath ? getDirFromPath(item.dirPath) : undefined,
        workingFile: item.filePath
          ? getFileFromPath(item.filePath) ?? undefined
          : undefined,
      },
    };
  // Else Dir
  const dirKeys = Object.keys(item.dir);
  return {
    label: item.name,
    iconId: item.iconId ?? 'folderClosed',
    value: '',
    subMenu: {
      options:
        dirKeys.length > 0
          ? [dirKeys.map((dirKey) => getProgramsMenuOptions(item.dir[dirKey]))]
          : [[{ label: '(Empty)', value: '' }]],
    },
  };
};
