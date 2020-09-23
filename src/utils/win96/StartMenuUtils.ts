import { FileSystemItem } from '../../types/FileSystem';
import { appList } from '../../data/appList';
import fileTypeList from '../../data/fileTypeList';
import { OptionType } from '../../components/shared/MenuOption/MenuOption';
import { getDirFromPath, getFileFromPath } from './FileSystemUtils';
import { fileSystem } from '../../data/fileSystem';

export const getProgramsMenuOptions = (item: FileSystemItem): OptionType => {
  if (item.type === 'app') {
    return {
      label: appList[item.appId].name,
      iconId: appList[item.appId].iconId,
      value: { appId: appList[item.appId].id },
    };
  }
  if (item.type === 'file')
    return {
      label: item.name,
      iconId: appList[fileTypeList[item.fileTypeId].appId].iconId,
      value: {
        appId: appList[fileTypeList[item.fileTypeId].appId].id,
        workingFile: item,
      },
    };
  if (item.type === 'shortcut')
    return {
      label: item.name,
      iconId: item.iconId,
      value: {
        appId: item.toAppId,
        workingDir: item.dirPath
          ? getDirFromPath(item.dirPath, fileSystem)
          : undefined,
        workingFile: item.filePath
          ? getFileFromPath(item.filePath, fileSystem) ?? undefined
          : undefined,
      },
    };
  // Else Dir
  const dirKeys = Object.keys(item.dir);
  const subMenuOptions =
    dirKeys.length > 0
      ? dirKeys
          .map((dirKey) => getProgramsMenuOptions(item.dir[dirKey]))
          .sort((a, b) => {
            if (a.subMenu && !b.subMenu) return -1;
            if (!a.subMenu && b.subMenu) return 1;
            return 0;
          })
      : [{ label: '(Empty)', value: '' }];
  return {
    label: item.name,
    iconId: item.iconId ?? 'folderClosed',
    value: '',
    subMenu: {
      options: [subMenuOptions],
    },
  };
};
