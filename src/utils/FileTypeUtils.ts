import { FileTypeId } from '../data/fileTypeList';

export const getFileTypeIdFromFileExtension = (
  fileExtension: string
): FileTypeId => {
  if (fileExtension === 'png') return 'bmpFile';
  if (fileExtension === 'txt') return 'notepadDoc';
  return 'notepadDoc';
};
