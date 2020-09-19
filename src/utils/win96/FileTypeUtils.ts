import { FileTypeId } from '../../data/fileTypeList';

export const getFileTypeIdFromFileExtension = (
  fileExtension: string
): FileTypeId => {
  if (['jpg', 'png'].includes(fileExtension)) return 'bmpFile';
  if (fileExtension === 'txt') return 'notepadDoc';
  return 'notepadDoc';
};
