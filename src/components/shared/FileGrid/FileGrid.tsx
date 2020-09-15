import { h, FunctionComponent } from 'preact';

import useFileGridState, { GridFile } from '../../../hooks/useFileGridState';
import Icon from '../Icon/Icon';

import style from './FileGrid.css';

// For conveniance
export { GridFile } from '../../../hooks/useFileGridState';

interface Props {
  direction?: 'column' | 'row';
  initialFiles: GridFile[];
  onDblClickFile: (fileId: string, fileType: string) => void;
  textColor?: 'black' | 'white';
}

const FileGrid: FunctionComponent<Props> = ({
  direction = 'row',
  initialFiles,
  onDblClickFile,
  textColor = 'black',
}: Props) => {
  const { files, focusOnFile, removeFocus } = useFileGridState(initialFiles);

  const handleOnClick = removeFocus;

  const handleOnClickFile = (
    e: MouseEvent,
    fileId: string,
    fileType: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    focusOnFile(fileId, fileType);
  };

  const handleOnDblClickFile = (
    e: MouseEvent,
    fileId: string,
    fileType: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    onDblClickFile(fileId, fileType);
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
          onClick={(e) => handleOnClickFile(e, file.id, file.type)}
          onDblClick={(e) => handleOnDblClickFile(e, file.id, file.type)}
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
