import { useEffect, useState } from 'preact/hooks';
import { FileSystemDir } from '../types/FileSystem';
import { ShellItem } from '../types/Shell';

import { getShellItems } from '../utils/win96/ShelIUtils';

export const useShellFilesState = (
  workingDir: FileSystemDir
): {
  files: ShellItem[];
  focusOnFile: (fileId: string) => void;
  removeFocus: () => void;
} => {
  const [files, setFiles] = useState<ShellItem[]>([]);

  useEffect(() => {
    setFiles(() => getShellItems(workingDir));
  }, []);

  const focusOnFile = (fileId: string) => {
    setFiles((f) =>
      f.map((file) => ({
        ...file,
        hasFocus: file.id === fileId,
        hasSoftFocus: file.id === fileId,
      }))
    );
  };

  const removeFocus = () => {
    setFiles((f) =>
      f.map((file) => ({
        ...file,
        hasFocus: false,
        hasSoftFocus: file.hasFocus,
      }))
    );
  };

  return { files, focusOnFile, removeFocus };
};

export default useShellFilesState;
