import { useState } from 'preact/hooks';

import { IconId } from '../data/iconList';

export interface GridFile {
  id: string;
  iconId: IconId;
  hasFocus: boolean;
  hasSoftFocus: boolean;
  name: string;
  type: 'app' | 'folder' | 'file';
}

interface ReturnValue {
  files: GridFile[];
  focusOnFile: (fileId: string, fileType: string) => void;
  removeFocus: () => void;
}

export const useFileGridState = (initialState: GridFile[]): ReturnValue => {
  const [files, setFiles] = useState<GridFile[]>(initialState);

  const focusOnFile = (fileId: string, fileType: string) => {
    setFiles(
      files.map((file) => ({
        ...file,
        hasFocus: file.type === fileType && file.id === fileId,
        hasSoftFocus: file.type === fileType && file.id === fileId,
      }))
    );
  };

  const removeFocus = () => {
    setFiles(
      files.map((file) => ({
        ...file,
        hasFocus: false,
        hasSoftFocus: file.hasFocus,
      }))
    );
  };

  return { files, focusOnFile, removeFocus };
};

export default useFileGridState;
