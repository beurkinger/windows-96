import { h, FunctionComponent } from 'preact';

import { FileSystemDir } from '../../../data/filesystem';
import useFileGridState, { ShellItem } from '../../../hooks/useFileGridState';
import Icon from '../Icon/Icon';

import style from './FileGrid.css';

// For convenianc
interface Props {
  direction?: 'column' | 'row';
  fileSystemNode: FileSystemDir;
  onDblClickFile: (file: ShellItem) => void;
  textColor?: 'black' | 'white';
}

const FileGrid: FunctionComponent<Props> = ({
  direction = 'row',
  fileSystemNode,
  // initialFiles,
  onDblClickFile,
  textColor = 'black',
}: Props) => {
  const { files, focusOnFile, removeFocus } = useFileGridState(fileSystemNode);

  const handleOnClick = removeFocus;

  const handleOnClickFile = (e: MouseEvent, file: ShellItem) => {
    e.preventDefault();
    e.stopPropagation();
    focusOnFile(file.id, file.type);
  };

  const handleOnDblClickFile = (e: MouseEvent, file: ShellItem) => {
    e.preventDefault();
    e.stopPropagation();
    onDblClickFile(file);
  };

  return (
    <div
      className={style.fileGrid}
      onClick={handleOnClick}
      style={{ flexDirection: direction }}
    >
      {files.map((file, i) => (
        <div
          className={`${style.file} ${file.hasFocus ? style.focus : ''} ${
            file.hasSoftFocus ? style.softFocus : ''
          }`}
          key={i + file.id}
          onClick={(e) => handleOnClickFile(e, file)}
          onDblClick={(e) => handleOnDblClickFile(e, file)}
          style={{ color: textColor }}
        >
          <div className={style.fileIcon}>
            <Icon iconId={file.iconId} size={32} />
          </div>
          <div className={style.fileLabel}>{file.name}</div>
        </div>
      ))}
    </div>
  );
};

export default FileGrid;
