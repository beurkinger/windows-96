import { h, FunctionComponent } from 'preact';

import { GridFile } from '../../../hooks/useFileGridState';
import Icon from '../Icon/Icon';

import style from './FileGrid.css';

// For conveniance as bot the State and the Component will be used together
export * from '../../../hooks/useFileGridState';

interface Props {
  direction: 'column' | 'row';
  onClickFile: (fileId: string, fileType: string) => void;
  onDblClickFile: (fileId: string, fileType: string) => void;
  files: GridFile[];
}

const FileGrid: FunctionComponent<Props> = ({
  direction = 'row',
  files,
  onClickFile,
  onDblClickFile,
}: Props) => {
  const handleOnClickFile = (
    e: MouseEvent,
    fileId: string,
    fileType: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    onClickFile(fileId, fileType);
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
    <div className={style.fileGrid} style={{ flexDirection: direction }}>
      {files.map((file, i) => (
        <div
          className={`${style.file} ${file.hasFocus ? style.focus : ''} ${
            file.hasSoftFocus ? style.softFocus : ''
          }`}
          key={i + file.id}
          onClick={(e) => handleOnClickFile(e, file.id, file.type)}
          onDblClick={(e) => handleOnDblClickFile(e, file.id, file.type)}
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
